const Discord = require("discord.js");
const client = new Discord.Client();
module.exports = {
  kod: "ban-say",
  async run(client, message, args) {
    var s = message.guild.fetchBans().then(bans => {
      message.channel.send(
        `||Bulunduğunuz sunucda **${bans.size}** banlı üye var||`
      );
    });
  }
};
