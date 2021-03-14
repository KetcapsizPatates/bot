module.exports = {
  kod: "sunucubilgi",
  async run (client, message, args) {
    const { MessageEmbed } = require('discord.js')
    var guild = message.guild
    var kanallar = guild.channels.cache
    var üyeler = guild.members.cache
    var emojiler = guild.emojis.cache
    var roller = guild.roles.cache
    var embed = new MessageEmbed()
    .setTitle(`${guild.name} Adlı Sunucunun Bilgileri`)
    .setThumbnail(guild.iconURL({dynamic: true}))
    .addField('**Temel Bilgiler**', [
      `**Sunucu Adı:** ${guild.name}`,
      `**Sunucu ID:** ${guild.id}`,
      `**Sunucu Sahibi:** <@${guild.owner.id}>`,
      `**Sunucu Sahip Tagı:** ${guild.owner.user.tag}`,
    ])
    .addField('**İstatistikler**', [
      `**Üye Sayısı:** ${guild.memberCount}`,
      `**Kullanıcı Sayısı:** ${üyeler.filter(üye => !üye.user.bot).size}`,
      `**Bot Sayısı:** ${üyeler.filter(üye => üye.user.bot).size}`,
      `**Emoji Sayısı:** ${emojiler.size}`,
      `**Rol Sayısı:** ${roller.filter(rol => rol.neme !== '@everyone').size}`,
      `**Kanal Sayısı:** ${kanallar.size}`,
      `**Metin Kanalı Sayısı:** ${kanallar.filter(kanal => kanal.type === 'text').size}`,
      `**Ses Kanalı Sayısı:** ${kanallar.filter(kanal => kanal.type === 'voice').size}`,
      `**Kategori Sayısı:** ${kanallar.filter(kanal => kanal.type === 'category').size}`
    ])
    .addField('**Durumlar**', [
      `**Çevrimiçi:** ${üyeler.filter(üye => üye.presence.status === 'online').size}`,
      `**Rahatsız Etmeyin:** ${üyeler.filter(üye => üye.presence.status === 'dnd').size}`,
      `**Boşta:** ${üyeler.filter(üye => üye.presence.status === 'idle').size}`,
      `**Çevrimdışı:** ${üyeler.filter(üye => üye.presence.status === 'offline').size}`,
    ])
    message.channel.send(embed)
  }
}