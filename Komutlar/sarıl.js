const Discord = require("discord.js");

var gif = [
  "https://em.wattpad.com/c91db52094eb7bbb37adf794fe8473701afa8005/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f5f795f744c4f6a736c53557775673d3d2d31352e313436356434653762333361663563663834303332373534393931332e676966",
  "https://i.pinimg.com/originals/92/61/03/92610344d52d68d60bea07b34cba9f19.jpg",
  "https://em.wattpad.com/17b64dbb1c384b2d729c8882e60932f5cfcb2fc4/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f707558366d463269597a364e35413d3d2d31312e313439353964303436303662613063633234313035333235313832392e676966",
  "https://em.wattpad.com/619a471d6b0009c9024e0348af080ff53026e7df/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f30526e64613141465072783442413d3d2d31352e313436356434656264333130333636623837373630373430323636362e676966",
  "https://www.cerezforum.com/proxy.php?image=http%3A%2F%2Fi.imgur.com%2FUt2880f.gif&hash=d3883ac5928b2d43ae9468c64eb18df8"
]; /// içine ekleyebilirsiniz istediğiniz kadar
module.exports = {
  kod: "sarıl",
  async run(client, message, args) {
    let gifler = gif[Math.floor(Math.random() * gif.length)];

    let kisi = message.mentions.users.first();

    if (!kisi) return message.channel.send("Kime Sarılıcan La ?");

    message.channel.send(
      new Discord.MessageEmbed()

        .setColor(message.guild.me.displayColor)

        .setTitle(`${kisi.username} adlı kullanıcıya sarıldın.`)

        .setImage(gifler)
    );
  }
};
