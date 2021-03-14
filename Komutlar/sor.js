const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");

const cevaplar = [
  "» Evet",
  "» Hayır",
  "» Belki",
  "» Olabilir",
  "» Daha sonra tekrar sor",
  "» İmkansız"
];

const cevaplar1 = [
  "[Bu Bilgiyi Kafamdan Uydurdum 🤖]",
  "[Sanırım Sallıyorum 🤖]",
  "[Doğru Olabilir 🤖]",
  "[Ben Botum Nerden Bilicem 🤖]",
  "[Kardeş Yanlış Bilgi Olabilir 🤖]",
  "[Hmmm 🤖]"
];
module.exports = {
  kod: "sor",
  async run(client, message, args) {
    var soru = args.join(" ");

    var cevap = cevaplar[Math.floor(Math.random() * cevaplar.length)];
    var cevap1 = cevaplar1[Math.floor(Math.random() * cevaplar1.length)];

    if (!soru)
      return message.reply(
        new MessageEmbed()
          .setColor("RANDOM")
          .setTitle("Bir soru belirt. [Örn: no.sorusor ]")
      );
    else message.channel.send(cevap + ", " + cevap1);
  }
};
