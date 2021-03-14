const play = require("discordjs-ytdl");
const { MessageEmbed } = require("discord.js");
const ytdl = require("ytdl-core");
module.exports = {
  kod: "çal",
  async run(client, message, args) {
    if (message.member.voice.channel) {
      const embed = new MessageEmbed()
        .setTitle("Şarkı Bulundu")
        .setColor("RANDOM")
        .setTimestamp()
        .setFooter(
          `${message.author.username} Tarafından İstendi`,
          message.author.displayAvatarURL({ dynamic: true })
        );
      const connection = await message.member.voice.channel.join();
      let id = await play.id(
        args.join(" "),
        "AIzaSyDhGYNeVTji3u-Y5fgNjKCwaO_xYxmMbms"
      );
      const şarkı = await connection.play(ytdl(id));
      let title = await play.title(
        args.join(" "),
        "AIzaSyDhGYNeVTji3u-Y5fgNjKCwaO_xYxmMbms"
      );
      embed.addField("**» Şu Şarkı Oynatılıyor:** ", title);
      let kanal = await play.channel(
        args.join(" "),
        "AIzaSyDhGYNeVTji3u-Y5fgNjKCwaO_xYxmMbms"
      );
      embed.addField("**» Kanal Adı** ", kanal);
      embed.addField("**» Şarkı ID si:** ", id);
      setTimeout(function() {
        message.channel.send(embed);
      }, 2500);
      şarkı.on("finish", () => {
        message.member.voice.channel.leave();
      });
    } else {
      message.reply("**Bir Kanala Katılmalısınız!!!**");
    }
  }
};
