module.exports = {
  kod: "ara155",
  async run(client, message, args) {
    const { MessageEmbed } = require("discord.js");
    if (!message.guild) {
      const Discord = require("discord.js");
      const ozelmesajuyari = new MessageEmbed()
        .setColor("RANDOM")
        .setTimestamp()
        .setAuthor(message.author.username, message.author.avatarURL)
        .addField("**Eğlence Komutları Özel Mesajlarda Kullanılamaz!**");
      return message.author.send(ozelmesajuyari);
    }
    if (message.channel.type !== "dm") {
      const sunucubilgi = new MessageEmbed()
        .setAuthor(message.author.username + " Polis Geliyor!!!!")
        .setColor("RANDOM")
        .setDescription("")
        .setImage(
          "http://www.hareketligifler.net/data/media/114/polis-hareketli-resim-0023.gif"
        )
        .setTimestamp()
        .setFooter(
          `${message.author.username} Tarafından İstendi`,
          message.author.displayAvatarURL({ dynamic: true })
        );
      return message.channel.send(sunucubilgi);
    }
  }
};
