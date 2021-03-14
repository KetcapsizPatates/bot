const Discord = require("discord.js");
module.exports = {
  kod: "kalp-logo",
  async run(client, message, args) {
    let isim = args.slice(0).join("+");
    if (!isim) return message.channel.send("Lütfen Bişey Yaz");
    let link =
      "https://bcassetcdn.com/asset/logo/4362501d-64af-4538-8b4e-051670b7dc5f/logo?v=4&text=" +
      isim;
    const embed = new Discord.MessageEmbed().setImage(link);
    message.channel.send(embed);
  }
};
