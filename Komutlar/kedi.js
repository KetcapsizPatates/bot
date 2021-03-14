const Discord = require("discord.js");
var request = require("request");
module.exports = {
  kod: "kedi",
  async run(client, message, args) {
    request(`http://aws.random.cat/meow`, function(error, response, body) {
      if (error) return console.log("Hata:", error);
      else if (!error) {
        var info = JSON.parse(body);
        let catembed = new Discord.MessageEmbed()
          .setColor("#7289DA")
          .setTitle("MMİİİYYAAAVVVV 🐱")
          .setImage(info.file);
        message.channel.send(catembed);
      }
    });
  }
};
