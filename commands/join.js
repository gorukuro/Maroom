module.exports = {
  name: "join",
  description: "let bot join the voiceChannel",
  exec: function(msg, args, bot){
    if(!msg.member) return msg.channel.send("cant ixecute in `DM Channel`")
    const { voiceChannel } = msg.member;
    if(!voiceChannel) return msg.channel.send("...")

    const permissions = voiceChannel.permissionsFor(msg.client.user);
    if(!permissions.has("CONNECT")) return msg.channel.send("lah gbs konek");

    // join voiceChannel
    // bot.user.setActivity(`Tidur di ${voiceChannel.name}`);
    return voiceChannel.join();
  }
}