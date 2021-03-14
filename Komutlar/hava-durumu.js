const Discord = require("discord.js");
const weather = require("weather-js");
module.exports = {
  kod: "hava-durumu",
  async run(client, message, args) {
    weather.find({ search: args.join(" "), degreeType: "C" }, function(
      err,
      result
    ) {
      if (err) message.channel.send(err);
      if (result === undefined || result.length === 0) {
        message.channel.send(
          new Discord.MessageEmbed()
            .setDescription("Lütfen bir yer gir.")
            .setColor("RANDOM")
        );
        return;
      }
      var current = result[0].current;
      var tahminler = result[0].forecast;
      var location = result[0].location;
      const embed = new Discord.MessageEmbed()
        .setDescription(`**${current.skytext}**`)
        .setTitle(
          current.skytext
            .replace(`Sunny`, `Güneşli`)
            .replace(`Partly`, `Kısmen`)
            .replace(`Mostly`, `Çoğunlukla`)
            .replace(`Rain`, `Yağmurlu`)
            .replace(`Light`, `Hafif`)
            .replace(`Cloudy`, `Bulutlu`)
            .replace(`Clear`, `Açık`)
        )
        .setAuthor(`${current.observationpoint} için hava durumu`)
        .setThumbnail(current.imageUrl)
        .setColor(0x00ae86)
        .addField(
          ":hourglass_flowing_sand:Zaman Dilimi",
          `UTC${location.timezone}`,
          true
        )
        .addField(":slot_machine:Derece Türü", location.degreetype, true)
        .addField(
          ":sun_with_face:Sıcaklık",
          `${current.temperature} Derece`,
          true
        )
        .addField(":sunrise:Hissedilen Sıcaklık:", `${current.feelslike}`, true)
        .addField(
          ":rainbow:Rüzgar",
          current.winddisplay
            .replace(`West`, `Batı`)
            .replace(`North`, `Kuzey`)
            .replace(`East`, `Doğu`)
            .replace(`South`, `Güney`)
            .replace(`west`, `Batı`)
            .replace(`north`, `Kuzey`)
            .replace(`east`, `Doğu`)
            .replace(`south`, `Güney`),
          true
        )
        .addField(":sun_with_face:En yüksek sıcaklık", tahminler[0].high, true)
        .addField(":sun_with_face:En düşük sıcaklık", tahminler[0].low, true)
        .addField(":foggy:Nem", `${current.humidity}%`, true)
        .setImage(
          "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQUa0EGqR1gF1vSrxU9F-qffGZWmwr7mDeTsA&usqp=CAU"
        );
      message.channel.send({ embed });
    });
  }
};
