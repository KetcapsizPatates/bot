const Discord = require("discord.js");
module.exports = {
  kod: "sohbet-aç",
  async run(client, message, args) {
    let every = message.guild.roles.cache.find(r => r.name === "@everyone");
    message.channel.createOverwrite(every, {
      SEND_MESSAGES: null
    });

    message.channel.send(
      " :white_small_square: **=**  **Sohbet kanalı** ``Yazılabilir`` **Haline Getirildi.**\n:white_small_square: **=** **Sohbet Kanalını Kapatmak İçin** ``!sohbet-kapat`` **Yazmanız Gerekmektedir.**"
    );
  }
};
