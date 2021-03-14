const Discord = require("discord.js");
module.exports = {
  kod: "m-logo",
  async run(client, message, args) {
    let isim = args.slice(0).join("+");
    if (!isim) return message.channel.send("Lütfen Bişey Yaz");
    let link =
      "https://bcassetcdn.com/asset/logo/b198ca03-24ec-42ee-9731-e24d407b1823/logo?v=4&text=" +
      isim;
    const embed = new Discord.MessageEmbed().setImage(link);
    message.channel.send(embed);
  }
};
