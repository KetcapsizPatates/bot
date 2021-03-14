const Discord = require("discord.js");
const client = new Discord.Client();
const db = require("quick.db");
module.exports = {
  kod: "ban",
  async run(client, message, args) {
    let guild = message.guild;
    let reason = args.slice(1).join(" ");
    let user =
      message.mentions.users.first() || client.users.cache.get(args[0]);
    if (!user)
      return message
        .reply("Kimi banlayacağını yazmalısın.")
        .catch(console.error);
    if (reason.length < 1) return message.reply("Ban sebebini yazmalısın.");
    guild.members.ban(user, { reason: reason });
    message.channel.send("Kullanıcı başarıyla banlandı.");
    const embed = new Discord.MessageEmbed()
      .setColor(0x000000)
      .setTitle("LOG OLAYI")
      .addField("Olay:", `Ban`)
      .addField("Kişi:", `${user.username}#${user.discriminator} (${user.id})`)
      .addField("Sebep", reason);
    message.channel.send(embed);
  }
};
