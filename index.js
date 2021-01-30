const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
  console.log(`Bot is online!`);
});

client.on("message", msg => {
  if (msg.content === "ping") {
    msg.reply("pong");
  }
});

client.login("ODAyMDg2MTU0NDA4ODIwNzQ2.YAqG8Q.8V4bon65iYtP8cYc1aAWI_8lJLULGs");
