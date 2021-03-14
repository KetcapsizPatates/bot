const Discord = require("discord.js");
module.exports = {
  kod: "rol-ver",
  async run(client, message, args) {
    if (!message.guild) {
      const ozelmesajuyari = new Discord.MessageEmbed()
        .setColor(0xff0000)
        .setTimestamp()
        .setAuthor(message.author.username, message.author.avatarURL())
        .addField("`rol-ver` **Adlı Komutu Özel Mesajlarda Kullanamazsın!**");
      return message.author.sendEmbed(ozelmesajuyari);
    }
    if (!message.member.hasPermission("MANAGE_ROLES"))
      return message.reply(
        "Bu Komutu Kullana Bilmek için `Rolleri Yönet` Yetkisine Sahip Olmalısın!"
      );
    let guild = message.guild;
    let rol = message.mentions.roles.first();
    let user = message.mentions.members.first();

    if (!user)
      return message
        .reply(
          "**Rol Vermek İstediğin Kişiyi Etiketlemelisin!** \n Not: **Komutun Düzgün Çalışmasi İcin MrPatato Adlı Rolü En Üste Alın Lütfen.**"
        )
        .catch(console.error);
    if (rol.length < 1) return message.reply("**Bir Rol Etiketlemelisin!**");

    user.roles.add(rol);
    const embed = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .setTimestamp()
      .setDescription(
        `Başarıyla ${user} İsimli Kullanıcıya ${rol} İsimli Rol Verildi!`
      );
    message.channel.send(embed);
  }
};
