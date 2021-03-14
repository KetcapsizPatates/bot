module.exports = {
  kod: "davet",
  async run(client, message, args) {
    const { MessageEmbed } = require("discord.js");
    const embed = new MessageEmbed()
      .setTitle("Davet Linki Aşağıda Bulunmakta")
      .setColor("RANDOM")
      .addField(
        "**» Bağlantılar**",
        "[Davet](https://discord.com/oauth2/authorize?client_id=779727316271628318&scope=bot&permissions=2147483647) • [Destek Sunucusu](https://discord.gg/vT443EFA)"
      )
      .setImage(
        "https://cdn.discordapp.com/attachments/727808813838893086/753234100617216151/indir.png"
      )
      .setTimestamp()
      .setFooter(
        `${message.author.username} Tarafından İstendi`,
        message.author.displayAvatarURL({ dynamic: true })
      );
    message.channel.send(embed);
  }
};
