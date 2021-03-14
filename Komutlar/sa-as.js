const db = require("quick.db");
const Discord = require("discord.js");
module.exports = {
  kod: "sa-as",
  async run(client, message, args) {
    if (!args[0])
      return message.channel.send(
        `Aç yada kapat yazmalısın!! Örnek: **!sa-as aç**`
      );
    if (!message.member.hasPermission("MANAGE_MESSAGES"))
      return message.channel.send(
        " Bu komutu kullanmak için `MESAJLARI_YÖNET` yetkisine sahip olmalısın!"
      );

    if (args[0] === "aç") {
      db.set(`sa_${message.guild.id}`, "acik");
      message.channel.send(
        `Artık bot Sa diyince As diyecek. Kapatmak için "\`!sa-as kapat\`" yazmalısın.`
      );
    }

    if (args[0] === "kapat") {
      db.set(`sa_${message.guild.id}`, "kapali");
      message.channel.send(`Artık biri sa diyince cevap vermicek.`);
    }
  }
};
