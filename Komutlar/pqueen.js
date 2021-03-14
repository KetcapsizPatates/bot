module.exports = {
  kod: "pqueen",
  async run(client, message, args) {
    const { MessageEmbed } = require("discord.js");
    const embed = new MessageEmbed()
      .setTitle("Sosyal Medya Hesapları")
      .setColor("RANDOM")
      .addField(
        "**Bağlantılar**",
        "[Twitch](https://www.twitch.tv/pqueen)\n[Twitter](https://www.twitter.com/pqueenn)\n[Instagram](https://www.instagram.com/pqueen92/)\n[Youtube](https://www.youtube.com/channel/UCxwPixDIOYYy4Qfk1X7I__g)"
      )
      .setTimestamp()
      .setFooter(
        `${message.author.username} Tarafından İstendi`,
        message.author.displayAvatarURL({ dynamic: true })
      );
    message.channel.send(embed);
  }
};
