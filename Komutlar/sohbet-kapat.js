const Discord = require("discord.js");
module.exports = {
  kod: "sohbet-kapat",
  async run(client, message, args) {
    let every = message.guild.roles.cache.find(r => r.name === "@everyone");
    message.channel.createOverwrite(every, {
      SEND_MESSAGES: false
    });

    message.channel.send(
      " :white_small_square: **=**  **Sohbet kanalı** ``Yazılamaz`` **Haline Getirildi.**\n\n :white_small_square: **=** **Sohbet Kanalını Açmak İçin** ``!sohbet-aç`` **Yazmanız Gerekmektedir.**"
    );
  }
};
