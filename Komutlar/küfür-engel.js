const Discord = require("discord.js");
const db = require("quick.db");
module.exports = {
  kod: "küfür-engel",
  async run(client, message, args) {
    if (args[0] === "aktif") {
      db.set(`kufur_${message.guild.id}`, "acik");
      message.channel.send("Başarılı Şekilde `Aktif` Edildi.");
      return;
    }
    if (args[0] === "deaktif") {
      db.delete(`kufur_${message.guild.id}`);
      message.channel.send("Başarılı Şekilde `Deaktif` Edildi");
      return;
    }
    message.channel.send("Lüten `Aktif` yada `Deaktif` Yazın!");
  }
};
