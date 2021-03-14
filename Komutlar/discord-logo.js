const Discord = require("discord.js");
module.exports = {
  kod: "discord-logo",
  async run(client, message, args) {
    let isim = args.slice(0).join("+");
    if (!isim) return message.channel.send("**Lütfen Bişey Yaz**");
    let link =
      "https://flamingtext.com/net-fu/proxy_form.cgi?script=adidas-logo&fontname=ethnocentric&text=" +
      isim +
      "&script=adidas-logo&text=Discord&fontname=ethnocentric&fillTextColor=%236d81e7&fillOutlineColor=%23fbfaf9&shadowType=0&backgroundRadio=0&imageoutput=true";
    const embed = new Discord.MessageEmbed().setColor(0xf001fa).setImage(link);
    message.channel.send(embed);
  }
};
