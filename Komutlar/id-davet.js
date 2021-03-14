const Discord = require("discord.js");
module.exports = {
  kod: "kanal-id-davet",
  async run(client, message, args) {
    let id = args[0];
    let kanal = client.channels.cache.get(id);
    if (!kanal)
      return message.channel.send(
        "Lütfen davetini almak istediğiniz sunucudaki bir kanalın idsini girin"
      );
    kanal.createInvite({ maxAge: 0 }).then(invite => {
      const embed = new Discord.MessageEmbed()
        .addField("Sunucu Adı:", kanal.guild.name, true)
        .addField("Davet Linki:", invite.url, true);
      message.channel.send(embed);
    });
  }
};
