module.exports = (msg, bot) => {
  const args = msg.content.slice(bot.prefix.length).split(/ +/);
  const commandName = args.shift().toLowerCase();
  const comid = bot.commands.get(commandName);
  if(comid){
    return comid.exec(msg, args, bot);
  }
}