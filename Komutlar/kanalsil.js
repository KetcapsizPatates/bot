module.exports = {
  kod: "sohbet-kanal-sil",
  async run(client, message, args) {
    if (!message.member.hasPermission("ADMINISTRATOR"))
      return message.channel.send("» Buna İznin Yok!");
    let kanal = message.mentions.channels.first();
    kanal.delete();
    message.channel.send("**Kanalı Başarıyla Sildim**");
  }
};
