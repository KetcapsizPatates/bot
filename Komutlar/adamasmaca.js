const { stripIndents } = require("common-tags");
let oyndurum = new Set();
module.exports = {
  kod: "adamasmaca",
  async run(client, message, args) {
    let kelime = [
      "elma",
      "armut",
      "eşya",
      "sunucu",
      "eşek",
      "kral",
      "yılbaşı",
      "köpek",
      "salata",
      "biber",
      "camii",
      "maymun",
      "aslan",
      "kurbağa",
      "discord"
    ];
    if (oyndurum.has(message.channel.id))
      return message.reply(
        "Kanal başına sadece bir adam asmaca oyunu meydana gelebilir."
      );
    try {
      const cevap = kelime[
        Math.floor(Math.random() * kelime.length)
      ].toLowerCase();
      let point = 0;
      let displayText = null;
      let tahmin = false;
      const confirmation = [];
      const yanlış = [];
      const display = new Array(cevap.length).fill("_");
      while (cevap.length !== confirmation.length && point < 6) {
        await message.channel.send(stripIndents`
                          ${
                            displayText === null
                              ? "**MrPatato Adam Asmaca**!"
                              : displayText
                              ? "**Çok İyisin**"
                              : "**Yanlış Harf**"
                          }
                               **Kelime:**    \`${display.join(" ")}\`
                          **Yanlış Harfler:** ${yanlış.join(", ") || "Yok"}
                          \`\`\`
                          _________
                          |    |
                          |    ${point > 0 ? "" : ""}
                          |   ${point > 2 ? "┌" : " "}${point > 1 ? "()" : ""}${
          point > 3 ? "┐" : ""
        }
                          |    ${point > 4 ? "/" : ""} ${point > 5 ? "\\" : ""}
                          |
                          \`\`\`
                      `);
        const filter = res => {
          const choice = res.content.toLowerCase();
          return (
            res.author.id === message.author.id &&
            !confirmation.includes(choice) &&
            !yanlış.includes(choice)
          );
        };
        const guess = await message.channel.awaitMessages(filter, {
          max: 1,
          time: 300000
        });
        if (!guess.size) {
          await message.channel.send("`Dostum Zaman Doldu`");
          break;
        }
        const choice = guess.first().content.toLowerCase();
        if (choice === "end") break;
        if (choice.length > 1 && choice === cevap) {
          tahmin = true;
          break;
        } else if (cevap.includes(choice)) {
          displayText = true;
          for (let i = 0; i < cevap.length; i++) {
            if (cevap.charAt(i) !== choice) continue;
            confirmation.push(cevap.charAt(i));
            display[i] = cevap.charAt(i);
          }
        } else {
          displayText = false;
          if (choice.length === 1) yanlış.push(choice);
          point++;
        }
      }
      oyndurum.delete(message.channel.id);
      if (cevap.length === confirmation.length || tahmin)
        return message.channel.send(
          `**Tebrikler Kelimeyi Buldun:**` + "`" + cevap + "`"
        );
      return message.channel.send(
        `**Maalesef Bilemedin Kelime Bu:**` + "`" + cevap + "`"
      );
    } catch (err) {
      oyndurum.delete(message.channel.id);
      return message.reply(`Olamaz Hata Bir Var: \`${err.message}\``);
    }
  }
};
