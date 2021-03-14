module.exports = {
  kod: "taşı",
  async run (client, message, args){
    if (!message.member.hasPermission('MOVE_MEMBERS')) return message.channel.send('Bu Kodu Kullanmaya İznin Yok!');
    const üye = message.mentions.members.first()
    if (!üye) return message.channel.send('» Herhangi Geçerli bir Üye Belirtmediniz!')
    if (!üye.voice.channel) return message.channel.send('» Bahsettiğiniz Kişi Sesli Kanalda Değil!');
    if (message.member.voice.channel){
      message.channel.send('**Başarıyla Kanala Taşındı!**');
      üye.voice.setChannel(message.member.voice.channel.id)
    } else {
      if (!args[1]) return message.channel.send('» Kanal ID Giriniz')
      if (isNaN(args[1])) return channel.message.send('» Lütfen Sadece Kanal Adını Giriniz!')
      message.channel.send('**Başarıyla Kanala Taşındı!**');
      üye.voice.setChannel(args[1])
    }
  }
}
