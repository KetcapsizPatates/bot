module.exports = {
  kod: "alkış",
  async run(client, message, args) {
    const Discord = require("discord.js");
    const embed = new Discord.MessageEmbed()
      .setAuthor("Alkış'la Joker")
      .setColor("RANDOM")
      .setImage(
        "https://thumbs.gfycat.com/WarpedAdmiredCormorant-size_restricted.gif "
      )
      .setTimestamp()
      .setFooter(
        `${message.author.username} Tarafından İstendi`,
        message.author.displayAvatarURL({ dynamic: true })
      );
    message.channel.send(embed);
  }
};
