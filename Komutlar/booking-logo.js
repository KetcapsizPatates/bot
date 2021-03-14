const Discord = require("discord.js");
module.exports = {
  kod: "booking-logo",
  async run(client, message, args) {
    let isim = args.slice(0).join("+");
    if (!isim) return message.channel.send("**Lütfen Bişey Yaz**");
    let link =
      "https://flamingtext.com/net-fu/proxy_form.cgi?imageoutput=true&script=booking-logo&text=" +
      isim;
    const embed = new Discord.MessageEmbed().setColor(0xf001fa).setImage(link);
    message.channel.send(embed);
  }
};
