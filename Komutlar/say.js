module.exports = {
  kod: "say",
  async run(client, message, args) {
    const voiceChannels = message.guild.channels.cache.filter(
      c => c.type === "voice"
    );
    let count = 0;
    for (const [id, voiceChannel] of voiceChannels)
      count += voiceChannel.members.size;
    const { MessageEmbed } = require("discord.js");
    const embed = new MessageEmbed()
      .setTitle("Sunucu Bilgisi")
      .setColor("RANDOM")
      .addField(
        "**» Sunucudaki Toplam Rol Sayısı**",
        message.member.guild.roles.cache.size
      )
      .addField("**» Sunucudaki Üye Sayısı**", message.guild.memberCount)
      .addField("**» Çevrimiçi Üye Sayısı**", message.guild.members.cache.size)
      .addField("**» Seslideki Üye Sayısı**", count)
      .setTimestamp()
      .setFooter(
        `${message.author.username} Tarafından İstendi`,
        message.author.displayAvatarURL({ dynamic: true })
      );
    message.channel.send(embed);
  }
};
