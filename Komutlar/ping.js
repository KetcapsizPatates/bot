module.exports = {
  kod: "ping",
  async run(client, message, args) {
    const { MessageEmbed } = require("discord.js");
    const embed = new MessageEmbed()
      .setTitle("PİNG ÖLÇÜLÜYOR")
      .addField("» Bot Pingi:", client.ws.ping + " ms")
      .addField(
        "**» Mesaj Gecikme Süresi:**",
        `${Date.now() - message.createdTimestamp} ms`
      )
      .setTimestamp()
      .setFooter(
        `${message.author.username} Tarafından İstendi`,
        message.author.displayAvatarURL({ dynamic: true })
      );
    message.channel.send(embed);
  }
};
