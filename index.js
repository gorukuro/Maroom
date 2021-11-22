const Discord = require("discord.js");
const bot = new Discord.Client();
const fs = require("fs");
bot.prefix = "MMM";


// register command
bot.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
for( const file of commandFiles){
  const command = require(`./commands/${file}`);
  bot.commands.set(command.name, command);
  console.log(`registering ${file} as ${command.name}`);
}

// event listener
bot.on("ready", ()=> {
  console.log(JSON.stringify(bot.user.username + " is ready"));
});

bot.on("message", msg => {
  if(msg.content.startsWith(bot.prefix) && !msg.author.bot){
    // console.log(msg.content);
    require("./handler.js")(msg, bot);
  }
})


bot.login(process.env.Token);