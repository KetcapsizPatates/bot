const { MessageEmbed } = require("discord.js");
const Discord = require("discord.js");

var gif = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTn0BKrSqG_5rJMfo6VlVShY2jh62ygXyuauA&usqp=CAU",
  "https://66.media.tumblr.com/236e4ba4f9cbac223f21c9e6db79223c/tumblr_n8vlficWcS1qfucd6o1_400.gif",
  "https://i.pinimg.com/originals/1d/da/3f/1dda3f25b7f03fca8ec55db88421a57b.gif",
  "https://em.wattpad.com/c310265a86bfd470457bb42c40f5b0a839d9678d/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f3961313439306433574d6e755f513d3d2d31362e313436363965306262323264373337333131383632313937343636392e676966",
  "https://img-s2.onedio.com/id-57727f42e3a6ed4d1083c1cf/rev-0/w-500/s-add117ae2406a1b6029cb7267f5c8ac58e8a9b26.gif"
]; /// içine ekleyebilirsiniz istediğiniz kadar
module.exports = {
  kod: "öp",
  async run(client, message, args) {
    let gifler = gif[Math.floor(Math.random() * gif.length)];
    let kisi = message.mentions.users.first();
    if (!kisi) return message.channel.send("Kimi öpeceksin ?");
    message.channel.send(
      new MessageEmbed()
        .setColor(message.guild.me.displayColor)
        .setTitle(`${kisi.username} adlı kullanıcıyı öptün.`)
        .setImage(gifler)
    );
  }
};
