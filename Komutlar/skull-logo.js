const Discord = require('discord.js');
module.exports = {
kod: "skull-logo",
async run (client, message, args) {
  let isim = args.slice(0).join("+")
  if(!isim)return message.channel.send("Lütfen Bişey Yaz")
let link = "https://bcassetcdn.com/asset/logo/10cd8160-2b8d-41c5-87cc-f683a853d5d9/logo?v=4&text="+isim
  const embed = new Discord.MessageEmbed()
  .setImage(link)
  message.channel.send(embed);
}
}