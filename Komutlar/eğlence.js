module.exports = {
  kod: "eğlence",
  async run(client, message, args) {
    const Dİscord = require("discord.js");
    const { Client, MessageEmbed } = require("discord.js");
    const embed = new MessageEmbed()
      .setTitle("MrPatato Eğlence Menüsü")
      .setColor("RANDOM")
      .setDescription(
        "**``Eğlence Kodları``**\n\nKod Açıklaması:`Bu Kodlar Tamamen Hiçbir Gereksinim gerektirmeden kullanabileceğiniz eğlence bazlı kodlardır.`\n\nNot:`Kodların Başına Prefix Koymayı Unutmayın`\n\n`boks` => `Boks Makinasına Vurursunuz`\n\n`!mckazanım` => `Yazdığınız Yazıyı Minecraft Ödülüne Dönüştürür NOT:Türkçe Karakter Çalışmaz`\n\n`balıktut` => `Balık Tutarsınız`\n\n`atatürk` => `Atamızın Resmini Gösterir`\n\n`ıq` => `IQ nuzu Ölcer`\n\n`adamasmaca` => `Adam Asmaca Oynarsınız`\n\n`alkış` => `Joker Sizin Yerinize Alkışlar`\n\n`ara155` => `Polis Kovalar`\n\n`oyunara` => `Oyun Arkadaşı Ararsınız`\n\n`espri` => `Espri Yaparsınız`\n\n`pqueen` => `Pqueen Yayıncısının Sosyal Medya Hesaplarını Gösterir`\n\n`cool-foto` => `Cool Bir Foto Görün`"
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
