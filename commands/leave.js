module.exports = {
  name: "dc",
  description: "leave curent voice room",
  exec: function(msg, args, bot){
    const voiceChannel = msg.guild.me.voiceChannel;
    if(voiceChannel){
      voiceChannel.leave();
      // bot.user.setActivity(`Berselancar lagi Kawand`);
    }
  }
}