const Discord = require("discord.js");
module.exports = {
  kod: "müzik-logo",
  async run(client, message, args) {
    let isim = args.slice(0).join("+");
    if (!isim) return message.channel.send("Lütfen Bişey Yaz"); //Darkcode
    let link =
      "https://bcassetcdn.com/asset/logo/545fa973-da1e-428a-bf78-f9f8b0717cdb/logo?v=4&text=" +
      isim;
    const embed = new Discord.MessageEmbed().setImage(link);
    message.channel.send(embed);
  }
};
