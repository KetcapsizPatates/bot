const Discord = require('discord.js');
const modül = require('sozluk-api');
const { MessageEmbed } = require("discord.js");
module.exports = {
kod: "tdk",
async run (client, message, args) {
  if(!args[0]) return message.reply('bir kelime girmelisin')
let kelime = await modül.tdk(args[0])
const embed = new MessageEmbed() //v11 kullanıyorsanız Discord.RichEmbed() yapınız.
.setColor('#ff0000')
.setThumbnail('https://upload.wikimedia.org/wikipedia/commons/5/51/Türk_Dil_Kurumu_logo.png')
.addField('Anlam:', kelime.anlam)
.addField('Lisan:', kelime.lisan)
.addField('Örnek:', `${kelime.örnek} -**${kelime.Yazar}**`)
.addField('Atasözü:', kelime.Atasözü)
message.channel.send(embed)

}
}