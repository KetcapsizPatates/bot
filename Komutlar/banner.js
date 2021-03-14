const Discord = require("discord.js");
module.exports = {
  kod: "banner",
  async run(client, message, args) {
    const yazi = args.slice(0).join("+");
    if (!yazi) return message.channel.send(`Lütfen yazı yazın!`);
    const linqo = `https://dummyimage.com/2000x500/33363c/ffffff&text=${yazi}`.replace(
      " ",
      "+"
    );
    const embed = new Discord.MessageEmbed()
      .setTitle("Bannerin hazır:")
      .setColor("#2ECC71")
      .setImage(linqo)
      .setFooter("Banner Oluşturuldu!");
    message.channel.send(embed);
  }
};
