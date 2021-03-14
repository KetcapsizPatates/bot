const Discord = require("discord.js");
module.exports = {
  kod: "rol-bilgi",
  async run (client, message, args) {
    const rol = message.mentions.roles.first()
    if (rol) {
    const embed = new Discord.MessageEmbed()
    .setTitle(`${rol.name} Rolü Hakkında Bilgiler`)
    .addField('Rolün İsmi', rol.name, true)
    .addField("Rolün ID'si ", rol.id, true)
    .addField('Rolün Renk Kodu', rol.hexColor, true)
    .addField("Rol Entegrasyon'mu ?", rol.managed ? ":white_check_mark:" : ":x:", true)
    .addField("Rolden Bahsedilebilir mi ?", rol.mentionable ? ":white_check_mark:" : ":x:", true)
    .addField("Rolün Sırası", rol.position, true)
    .addField("Bu Rol Kaç Kişide Var ?", rol.members.size, true)
    .addField("Bu Rol Diğer Rollerden Ayrı Bi Yerdemi Gösteriliyor ?", rol.hoist ? ":white_check_mark:" : ":x:", true)
    .setFooter('Bu Rol Şu Tarihte Oluşturuldu => ')
    .setTimestamp(rol.createdTimestamp)
    message.channel.send(embed);
  } else {
    var role = message.guild.roles.cache.find(r => r.name.includes(args.join(" ")))
    if (!role) role = message.guild.roles.cache.find(r => r.id === args.join(" "))
    if (!role) return message.channel.send('Bu İsme Sahip Bi Röl Bulamadım')
    const embed = new Discord.MessageEmbed()
    .setTitle(`${role.name} Rolü Hakkında Bilgiler`)
    .addField('Rolün İsmi', role.name, true)
    .addField("Rolün ID'si ", role.id, true)
    .addField('Rolün Renk Kodu', role.hexColor, true)
    .addField("Rol Entegrasyon'mu ?", role.managed ? ":white_check_mark:" : ":x:", true)
    .addField("Rolden Bahsedilebilir mi ?", role.mentionable ? ":white_check_mark:" : ":x:", true)
    .addField("Rolün Sırası", role.position, true)
    .addField("Bu Rol Kaç Kişide Var ?", role.members.size, true)
    .addField("Bu Rol Diğer Rollerden Ayrı Bi Yerdemi Gösteriliyor ?", role.hoist ? ":white_check_mark:" : ":x:", true)
    .setFooter('Bu Rol Şu Tarihte Oluşturuldu => ')
    .setTimestamp(role.createdTimestamp)
    message.channel.send(embed);
  }
  }
}

