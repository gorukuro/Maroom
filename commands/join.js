module.exports = {
  name: "join",
  description: "let bot join the voiceChannel",
  exec: function(msg, args, bot){
    if(!msg.member) return msg.channel.send("cant ixecute in `DM Channel`")
    const { voiceChannel } = msg.member;
    if(!voiceChannel) return msg.channel.send("make sure u did join voice channel or maybe im not join ur server!")

    const permissions = voiceChannel.permissionsFor(msg.client.user);
    if(!permissions.has("CONNECT")) return msg.channel.send("im sorry, but i dont have prmss to `CONNECT`");

    // join voiceChannel
    return voiceChannel.join();
  }
}