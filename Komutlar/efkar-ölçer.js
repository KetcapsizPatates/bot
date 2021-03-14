const Discord = require("discord.js");
module.exports = {
  kod: "efkar-ölçer",
  async run(client, message, args) {
    const random = Math.floor(Math.random() * 100) + 1;
    message.channel.send(`Efkarınız %${random} Efkar `);
  }
};
