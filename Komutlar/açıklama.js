const Discord = require("discord.js");
module.exports = {
  kod: "açıklama",
  async run(client, message, args) {
    var args = message.content
      .split(" ")
      .slice(1)
      .join(" ");
    if (!message.member.hasPermission("MANAGE_CHANNELS"))
      return message.reply(":x:Bunun için gerekli iznin yok");
    if (!args) return message.reply("Kanalın açıklamasına ne yazmam gerek!");
    message.channel
      .setTopic(`${args}`)
      .then(newChannel =>
        message.channel.send(`Bu kanalın yeni konusu ***${args}***`)
      )
      .catch(console.error);
  }
};
