const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
module.exports = {
  kod: "çaylar",
  async run(client, message, args) {
    const embed = new MessageEmbed()
      .setTitle("Çaylarrr Geldi")
      .setDescription(`${message.author} herkese çay ısmarladı`)
      .setImage(
        "https://media.discordapp.net/attachments/761996426090905678/763749976941396028/indir.jpg"
      );
    message.channel.send(embed);
  }
};
