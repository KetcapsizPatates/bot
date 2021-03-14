const Discord = require("discord.js");
module.exports = {
  kod: "rol-al",
  async run(client, message, args) {
    if (!message.guild) {
      const ozelmesajuyari = new Discord.MessageEmbed()
        .setColor(0xff0000)
        .setTimestamp()
        .setAuthor(
          message.author.username,
          message.author.avatarURL({ dynamic: true })
        )
        .addField("`unrole` **Adlı Komutu Özel Mesajlarda Kullanamazsın!**");
      return message.author.send(ozelmesajuyari);
    }
    if (!message.member.hasPermission("MANAGE_ROLES"))
      return message.channel.send(
        "Bu Komutu Kullana Bilmek için `Rolleri Yönet` Yetkisine Sahip Olmalısın!"
      );
    let guild = message.guild;
    let rol = message.mentions.roles.first();
    let user = message.mentions.members.first();

    if (!user)
      return message.channel
        .send(
          "**Kimeden Rol Alınacağını Yazmalısın!**  \n Not: **Komutun Düzgün Çalışmasi İcin MrPatato Adlı Rolü En Üste Alın Lütfen.**"
        )
        .catch(console.error);
    if (rol.length < 1)
      return message.channel.send("**Alınacak Rolü Yazmalısın!**");
    user.roles.remove(rol);

    const embed = new Discord.MessageEmbed()
      .setDescription(
        `Başarıyla ${user} İsimli Kullanıcıdan ${rol} İsimli Rol Alındı!`
      )
      .setFooter(client.user.username, client.user.avatarURL({ dynamic: true }))
      .setColor("RANDOM")
      .setTimestamp();
    message.channel.send({ embed });
  }
};
