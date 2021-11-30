const alowed_users = [
  "598943183556313109", //me
  "418401296018571264", //rul
  "448150604548800514", //zenki
  "384295867856846868"
]

module.exports = (msg, bot) => {
  if(!alowed_users.includes(msg.author.id)) return;
  const args = msg.content.slice(bot.prefix.length).split(/ +/);
  const commandName = args.shift().toLowerCase();
  const comid = bot.commands.get(commandName);
  if(comid){
    return comid.exec(msg, args, bot);
  }
}