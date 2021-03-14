const Discord = require("discord.js");
module.exports = {
  kod: "aşk-ölçer",
  async run(client, message, args) {
    let member = message.mentions.members.first();
    let yuzde = Math.round(Math.random() * 100);
    if (!member)
      return message.reply("Aşkını ölçmek istediğin kişiyi etiketle.");
    const embed = new Discord.MessageEmbed()
      .setTitle(`Aşk Ölçer`)
      .setColor("RANDOM")
      .setDescription(`${member} kişisine %${yuzde} aşıksın <3 `);
    message.channel.send(embed);
  }
};
