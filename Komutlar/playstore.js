const Discord = require("discord.js");
const gplay = require("google-play-scraper");
module.exports = {
  kod: "playstore",
  async run(client, message, args) {
    const uygulama = args.join(" ");

    if (!uygulama) {
      var embed = new Discord.MessageEmbed()
        .setTitle(`Bir hata oldu! <:notick:777580585085829150>`)
        .setColor("RED")
        .setDescription(`Bir uygulama ismi girmeye ne dersin?`);
      return message.channel.send(embed);
    } else {
      if (uygulama) {
        gplay
          .search({
            lang: "tr",
            term: uygulama,
            country: "tr",
            fullDetail: true
          })
          .then(x => {
            const oyun = x[0];

            var editor = oyun.editorsChoice;

            if (editor === true) {
              editor = "Editörün Seçimi";
            } else {
              editor = "Değil";
            }

            var oyune = new Discord.MessageEmbed()
              .setTitle(oyun.title)
              .setDescription(
                oyun.summary + `\n\n[Ziyaret İçin Tıkla](${oyun.url})`
              )
              .addField(`Puan: `, oyun.scoreText, true)
              .addField(`Fiyat: `, oyun.priceText, true)
              .addField(`İndirilme: `, oyun.installs, true)
              .addField(`Geliştirici: `, oyun.developer, true)
              .addField(`Boyut: `, oyun.size, `B`, true)
              .addField(`Editörün Şeçimi mi ?: `, editor, true)
              .setThumbnail(oyun.icon)
              .setColor("GREEN");
            return message.channel.send(oyune);
          });
      }
    }
  }
};
