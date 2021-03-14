const Discord = require("discord.js");
module.exports = {
  kod: "gold-logo",
  async run(client, message, args) {
    let isim = args.slice(0).join("+");
    if (!isim) return message.channel.send("**Lütfen Bişey Yaz**");
    let link = "https://habbofont.net/font/palooza/" + isim + ".gif";
    const embed = new Discord.MessageEmbed().setColor(0xf001fa).setImage(link);
    message.channel.send(embed);
  }
};
