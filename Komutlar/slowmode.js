module.exports = {
  kod: "slowmode",
  async run(client, message, args) {
    const ms = require("rhino-ms");
    if (!message.member.hasPermission("ADMINISTRATOR"))
      return message.channel.send("Bu Kodu Kullanmaya İznin Yok!");
    const zaman = ms(args.join(" "), { birim: "saniye" });
    if (zaman > 21600 || zaman < 1)
      return message.channel.send(
        "**Lütfen 1 Saniye İle 6 Saat Arası Bir Değer Yazınız!**"
      );
    const slowmode = Math.floor(zaman);
    message.channel.setRateLimitPerUser(slowmode);
    message.channel.send(
      "**Bu Kanalı **" + args.join(" ") + "** Slowmode Aldım**"
    );
  }
};
