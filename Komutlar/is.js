const { MessageEmbed } = require("discord.js");
const moment = require("moment");
require("moment-duration-format");
const os = require("os");
module.exports = {
  kod: "is",
  async run(client, message) {
    const dizi = [];
    client.guilds.cache.forEach((item, i) => {
      dizi.push(item.memberCount);
    });
    var toplam = 0;
    for (var i = 0; i < dizi.length; i++) {
      if (isNaN(dizi[i])) {
        continue;
      }
      toplam += Number(dizi[i]);
    }
    const uptime = moment
      .duration(client.uptime)
      .format(" D [gün], H [saat], m [dakika], s [saniye]");
    const embed = new MessageEmbed()
      .setTitle("İstatistik")
      .addField("**» Kullanıcı Sayısı**", toplam)
      .addField("**» Sunucu Sayısı**", client.guilds.cache.size)
      .addField("**» Kanal Sayısı**", client.channels.cache.size)
      .addField("**» Çalışma Süresi**", uptime)
      .addField("**» Node.js Versiyon**", process.version)
      .addField(
        "**» Ram Kullanımı**",
        (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)
      )
      .addField("**» CPU**", os.cpus().map(i => i.model)[0])
      .addField("**» Bit**", os.arch())
      .addField("**» İşletim Sistemi**", os.platform())
      .setTimestamp()
      .setFooter(
        `${message.author.username} Tarafından İstendi`,
        message.author.displayAvatarURL({ dynamic: true })
      );
    message.channel.send(embed);
  }
};
