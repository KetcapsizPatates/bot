module.exports = {
  kod: "ayrıl",
  async run(client, message, args) {
    if (!message.member.voice.channel)
      return message.channel.send("Sesli Kanalda Değilsin");
    if (!message.guild.me.voice.channel)
      return message.channel.send(
        "Bir Sesli Kanalda Değilim Beni Nasıl Sesli Knaladan Çıkarcan"
      );
    if (message.member.voice.channel.id !== message.guild.me.voice.channel.id)
      return message.channel.send(
        "Aynı Sesli Kanalda Olmadağımızdan Sen Beni Sesli Kanaldan Çıkaramazsın"
      );
    message.member.voice.channel.leave();
    message.channel.send("Başarılı Olarak Sesli Kanaldan Çıktım");
  }
};
