const Discord = require("discord.js");
const bot = new Discord.Client();
const fs = require("fs");
const express = require("express");
const app = new express();
const _PORT = process.env.PORT || 3000;
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
  app.listen(_PORT, () => console.log("listen to port: "+_PORT))
});

bot.on("message", msg => {
  if(msg.content.startsWith(bot.prefix) && !msg.author.bot){
    // console.log(msg.content);
    require("./handler.js")(msg, bot);
  }
})

app.get("/", (req, resp)=>{
  return resp.json({
    status: "success"
  })
})


bot.login(process.env.Token);