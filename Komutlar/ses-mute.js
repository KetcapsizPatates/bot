const Discord = require("discord.js");
const ms = require("ms");
module.exports = {
kod: "ses-mute",
async run (client, message, args) {
  if (!message.member.hasPermission("MUTE_MEMBERS"))
    return message.channel.send("Yetkin yko ağla");

  let kisi = message.mentions.users.first();

  if (!kisi) return message.channel.send(`Birini etiketlemelisin`);

  if (
    message.guild.members.cache.get(kisi.id).roles.highest.position >
    message.member.roles.highest.position
  )
    return message.channel.send(
      "Bu kişiyi muteleyemezsin yetkisi senden yüksek."
    );

  if (!message.guild.members.cache.get(kisi.id).voice.channel)
    return message.channel.send(`Bu kullanıcı seslide değil.`);

  let süre = args[1];

  if (!süre)
    return message.channel.send(`Ne kadar süre susturacağımı belirtmelisin.`);

  message.guild.members

    .get(kisi.id)

    .setMute(true)

    .then(() =>
      message.channel.send(
        new Discord.MessageEmbed()

          .setDescription(`Birisi ses kanalda susturuldu`)

          .addField("Muteleyem:", message.author, true)

          .addField("Mutelenen:", kisi.tag, true)

          .addField(
            `Süre:`,

            süre

              .replace(/d/, " gün")

              .replace(/s/, " saniye")

              .replace(/m/, " dakika")

              .replace(/h/, " saat"),

            true
          )
      )
    );

  setTimeout(async () => {
    message.guild.members

      .get(kisi.id)

      .setMute(false)

      .then(() =>
        message.channel.send(
          new Discord.MessageEmbed()
            .setDescription(`Ses Mute süresi bitti:`)

            .addField("Muteleyen:", message.author, true)

            .addField("Mutelenen:", kisi.tag, true)

            .addField(
              `Süre:`,

              süre

                .replace(/d/, " gün")

                .replace(/s/, " saniye")

                .replace(/m/, " dakika")

                .replace(/h/, " saat"),

              true
            )
        )
      );
  }, ms(süre));
}
}