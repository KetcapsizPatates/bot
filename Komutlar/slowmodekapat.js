module.exports = {
  kod: "slowmode-kapat",
  async run(client, message, args) {
    if (!message.member.hasPermission("ADMINISTRATOR"))
      return message.channel.send("**Bu Kodu Kullanmaya İznin Yok!**");
    message.channel.setRateLimitPerUser(0);
    message.channel.send("**Bu Kanalın Slowmodeunu Başarıyla Kapattım**");
  }
};
