const Discord = require("discord.js");
const math = require("math-expression-evaluator");
const stripIndents = require("common-tags").stripIndents;
module.exports = {
  kod: "hesapla",
  async run(client, message, args) {
    var soru = args.join(" ");
    if (!soru)
      return message.reply(
        "Bir işlem belirtin. Doğru Kullanım: w!hesapla <işlem>"
      );
    else {
      let cevap;
      try {
        cevap = math.eval(soru);
      } catch (err) {
        message.channel.send("Hatalı işlem: **" + err);
      }
      const embed = new Discord.MessageEmbed()
        .setTitle("Matematik Hesaplaması")
        .setColor(7419530)
        .addField("Soru", soru)
        .addField("Cevap", cevap);
      message.channel.send(embed);
    }
  }
};
