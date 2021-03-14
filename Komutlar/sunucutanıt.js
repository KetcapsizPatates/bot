const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require('fs');
const ms = require("ms")
const db = require('quick.db')
const { MessageEmbed } = require("discord.js");
module.exports = {
kod: "sunucutanıt",
async run (client, message, args) {
  let sure = 1800000
  let tanıtsure = await db.fetch(`tanıtsüre_${message.member.id}`)
  if (tanıtsure !== null && sure - (Date.now() - tanıtsure) > 0) {
        let timeObj = ms(sure - (Date.now() - tanıtsure))
      message.channel.send(`Yakın zamanda zaten sunucunu tanıtmıssın biraz beklemen lazım.`)
    } else {
      if (!message.guild) return message.author.send("Bu komut özel mesajlarda kullanılamaz.")
    if(!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send("Bu Komutu kullanmanız için `Sunucu_Yönet` Yetkisine sahip olmalısınız.")
   const embed = new MessageEmbed()
  .setTitle('BAŞARILI')
  .setDescription('Sunucu [Burada](https://discord.gg/9DZm26DsCk) Tanıtıldı! \n12 Saat Sonra Tekrar Tanıtabilirsiniz.')
  .setColor('GREEN')
 message.channel.send(embed);
    message.channel.createInvite({maxAge: 0}).then((invite) => {
        const embed2 = new MessageEmbed()
            .addField(` Sunucu Sahibi`, message.author.tag, false)
            .addField(` Sunucu İsmi`, message.guild.name, false)
      .addField(` Sunucu Davet Linki`, invite.url, false)
            .setColor('RANDOM')
      .setThumbnail(message.guild.iconURL())
       client.channels.cache.get('799284925462216734').send(embed2)
            });
   db.set(`tanıtsüre_${message.member.id}`, Date.now())   }
}
}