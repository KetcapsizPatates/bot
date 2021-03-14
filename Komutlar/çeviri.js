const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
module.exports = {
  kod: "çeviri",
  async run(client, message, args) {
    let google = args.slice(0).join("+");

    let link = `https://translate.google.com/?hl=tr#tr/en/` + google;
    if (!link) return message.reply("Hata !");
    if (!google) return message.reply("**Lütfen Ne Çevireceğimi Yaz**");
    let embed = new MessageEmbed()
      .setColor("0xe2ff00")
      .setTimestamp()
      .addField("Kelime:", `${args.slice(0).join(" ")}`)
      .addField("Link:", `${link}`);

    message.channel.send(embed);
  }
};
