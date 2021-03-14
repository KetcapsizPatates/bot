const Discord = require("discord.js");
module.exports = {
  kod: "gold2-logo",
  async run(client, message, args) {
    let isim = args.slice(0).join("+");
    if (!isim) return message.channel.send("**Lütfen Bişey Yaz**");
    let link =
      "https://dynamic.brandcrowd.com/asset/logo/f802ad87-f5ae-491f-9a02-89ee701b588f/logo?v=4&text=" +
      isim;
    const embed = new Discord.MessageEmbed().setColor(0xf001fa).setImage(link);
    message.channel.send(embed);
  }
};
