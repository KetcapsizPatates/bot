module.exports = {
  kod: "avatar",
  async run(client, message, args) {
    const { MessageEmbed, Message } = require("discord.js");
    const user = message.mentions.users.first();
    if (user) {
      const embed = new MessageEmbed()
        .setTitle("Avatarin Altta :)")
        .setImage(user.displayAvatarURL({ dynamic: true, size: 4096 }));
      message.channel.send(embed);
    } else {
      const embed = new MessageEmbed()
        .setTitle("Avatarı Altta :)")
        .setImage(
          message.author.displayAvatarURL({ dynamic: true, size: 4096 })
        );
      message.channel.send(embed);
    }
  }
};
