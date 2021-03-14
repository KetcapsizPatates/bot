const Discord = require("discord.js");
module.exports = {
    kod: "emoji-bilgi",
    async run(client, message, args) {
      const moment = require('moment')
      require('moment-duration-format')
        if (!args[0]) return message.reply('Lütfen Bir Emoji Adı Girin')
        var emojiadı = args[0]
        var emoji = message.guild.emojis.cache.find(emote => emote.name === emojiadı)
        if (!emoji) return message.reply(`Üzgünüm Ama **${emojiadı}** Adlı Emoji'yi Bulamadım `)
        const embed = new Discord.MessageEmbed()
        .setAuthor(emoji.name, emoji.url)
        .setDescription(`**${emoji.name}** Adlı Emojinin Bilgileri`)
        .addField("Emoji Adı", `**${emoji.name}**`, true)
        .addField("Emoji ID'si", `**${emoji.id}**`, true)
        .addField("Emoji URL'si", `**[URL](${emoji.url})**`, true)
        .setThumbnail(emoji.url)
        .addField("Emoji Gif'mi ?", `**${emoji.animated ? ":white_check_mark:" : ":x:"}**`)
        .setFooter('Emoji Şu Tarihte Oluşturuldu => ')
        .setTimestamp(emoji.createdTimestamp)
        .setColor("RANDOM")
        message.channel.send(embed);
    }
  };