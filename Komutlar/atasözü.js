const Discord = require("discord.js");
var Random = [
  "**Acele ile menzil alınmaz.**",
  "**Acı söz insanı dininden çıkarır, tatlı söz yılanı deliğinden çıkarır.**",
  "**Akıllı sır saklar; aptal sır verir.**",
  "**Baba oğluna bir bağ bağışlamış, oğul babaya bir salkım üzüm vermemiş.**",
  "**Bağ dua değil, çapa dua ister.**",
  "**Leyleği kuştan mı sayarsın, yazın gelir, kışın gider.**",
  "**Açık yerde tepecik kendini dağ sanır.**",
  "**Ağacın iyisi özünden, Yiğidin iyisi sözünden olur.**",
  "**Ak şeker, kara şeker, bir damar soya çeker.**",
  "**Akıllı sohbetinden salak gülmesinden anlaşılır.**",
  "**Akılsız kasabın gerisine kaçar masadı.**",
  "**Altın eşik, gümüş eşiğe muhtaç olur.**",
  "**Ana besler hurmayla, eloğlu karşılar yarmayla.**",
  "**Arı, bal alacak çiçeği bilir.**",
  "**Asıl azmaz bal kokmaz, kokarsa yağ kokar!**",
  "**Asıl ara, soy ara, bulamazsan ne çare.**",
  "**Ata eyer gerek, eyere er gerek.**",
  "**Atın dorusu, yiğidin delisi.**",
  "**Av avlanmış, tav tavlanmış.**",
  "**Ava giden avlanır.**",
  "**Ayağı yürüten baştır.**",
  "**Alma yetimin ahını! Çıkar aheste aheste.**",
  "**Aptal ata binince bey oldum sanır.**",
  "**Akşamın hayrından sabahın şerri iyidir.**",
  "**Alma mazlumun ahını, gökden indirir şahını.**",
  "**Altın eşik, ağaç eşiğe muhtaçtır.**"
];
module.exports = {
  kod: "atasözü",
  async run(client, message, args) {
    var atasozuver = Math.floor(Math.random() * Random.length);
    const atasozu = new Discord.MessageEmbed()
      .setDescription(`${Random[atasozuver]}`)
      .setColor("RANDOM");
    message.channel.send(atasozu);
  }
};
