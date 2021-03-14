module.exports = {
  kod: "moderasyon",
  async run(client, message, args) {
    const Dİscord = require("discord.js");
    const { Client, MessageEmbed } = require("discord.js");
    const embed = new MessageEmbed()
      .setTitle("MrPatato Moderasyon Menüsü")
      .setColor("RANDOM")
      .setDescription(
        "**Moderasyon Kodları**\n\nKod Açıklaması:`Bu Kodlar Tamamen Hiçbir Gereksinim gerektirmeden kullanabileceğiniz eğlence bazlı kodlardır.`\n\nNot:`Kodların Başına Prefix Koymayı Unutmayın`\n\n`afk` => `AFK Kalırsınız`\n\n`ban-say` => `Sunucuda Kaç Kişinin Banlı Olduğunu Gösterir`\n\n`ban` => `Etiketleyip ve Neden Yazıp Birini Banlarsınız \nÖrnek: (!ban @kişi neden)`\n\n`sohbet-kanal-sil` => `Etiketlediğiniz Kanalı Silersiniz`\n\n`kick` => `Etiketleyip ve Neden Yazıp Birini Kicklersiniz \nÖrnek: (!kick @kişi neden)`\n\n`rol-ver` => `Etiketlediğiniz Kişiye Rol Verir \nÖrnek: (!rol-ver @kişi @rol)`\n\n`rol-al` => `Etiketledğiniz Kişinin Rolunü Alırsınız \nÖrnek: (!rol-al @kişi @alacağınız rol)`\n\n`slowmode` => `Yazdığınız Kanalın Slowmodeunu Ayarlarsınız \nÖrnek: (!slowmode 1saniye)`\n\n`slowmodekapat` => `Yazdığınız Kanalın Slowmodeunu Kapatırsınız \n\nÖrnek: (!slowmodekapat)`\n\n`sohbet-kapat` => `Yazdığınız Kanalı Sohbete Kullanmını Devre Dışı Yaprsınız`\n\n`sohbet-aç` => `Yazdığınız Kanalın Sohbete Kullanımını Açarsınız`\n\n`sunucubilgi` => `Sunucunun Bilgilerini Gösterir`\n\n`sunucukur` => `Sunucu Kurarsınız`"
      )
      .addField(
        "**Bağlantılar**",
        "[Davet](https://discord.com/oauth2/authorize?client_id=779727316271628318&scope=bot&permissions=2147483647) • [Destek Sunucusu](https://discord.gg/vT443EFA)"
      )
      .setTimestamp()
      .setFooter(
        `${message.author.username} Tarafından İstendi`,
        message.author.displayAvatarURL({ dynamic: true })
      );
    message.channel.send(embed);
  }
};
