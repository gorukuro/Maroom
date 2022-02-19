// init require

// export module
module.exports = {
  name: "p",
  description: "play yyoutube url",
  async exec(message, args, client) {
    
    if (!message.member)
      return message.channel.send(
        "apa? voice mana"
      );

    const { voiceChannel } = message.member;
    const ytdl = require("ytdl-core");
    const msg = message;

    if (!args[0]) return msg.channel.send("...");

    if (!voiceChannel) {
      return message.reply("eh! dimana");
    }

    try {
      voiceChannel.join().then(connection => {
        const stream = !(/http(s)?\:\/\//).test(args.join()) || args.join().includes("youtube") 
          ? ytdl(args.join(), { filter: "audioonly" })
          : args.join();
        // console.log(stream);
        const dispatcher = connection.playStream(stream);
        process.on("unhandledRejection", error =>
          console.error("Uncaught Promise Rejection", error)
        );

        dispatcher.on("end", () => {
          if (!message.guild.me.voiceChannel) return;

          // msg.channel.send("stream end");
        });

      });

    } catch (err) {
      console.log(err.message);
      // msg.channel.send(err.message);
    }
  }
};