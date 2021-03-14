const Discord = require("discord.js");
module.exports = {
  kod: "arrow-logo",
  async run(client, message, args) {
    let isim = args.slice(0).join("+");
    if (!isim) return message.channel.send("**Lütfen Bişey Yaz**");
    let link =
      "https://dynamic.brandcrowd.com/asset/logo/1a2ebc7a-1b24-466a-bee7-9a0e8f5d8395/logo?v=4&text=" +
      isim;
    const embed = new Discord.MessageEmbed().setColor(0xf001fa).setImage(link);
    message.channel.send(embed);
  }
};
