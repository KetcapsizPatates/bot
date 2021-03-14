const Discord = require('discord.js')
var steam = require('steam-provider')
const { MessageEmbed } = require("discord.js");
var provider = new steam.SteamProvider();

module.exports = {
    kod: "steam",
    async run (client, message, args) {
    let game = args[0]
    let steampng = "https://cdn.discordapp.com/attachments/458004691402489856/470344660364034049/steam.png"
    if (!game) return message.reply('Lütfen Steamde Olan Bir Oyunun Adını Yazın. Örnek: ``?steam ets2``')
    provider.search(game).then(result => {
    provider.detail(result[0].id, "turkey", "tr").then(results => {
    const embed = new MessageEmbed()
    .setAuthor('Steam Store', steampng)
    .setTitle(result[0].name)
    .addField(`Oyunun ID'sı`, result[0].id)
    .setThumbnail(results.otherData.imageUrl)
    .addField('Türleri', results.genres)
    .addField('Fiyati', `Normal Fiyat **${results.priceData.initialPrice}** TL
İndirimli Fiyat **${results.priceData.finalPrice}** TL`, true)
    .addField('Platformlar', results.otherData.platforms, true)
    .addField('Etiketleri', results.otherData.features, true)
    .addField('Geliştiricileri', results.otherData.developer, true)
    .addField('Yayımcıları', results.otherData.publisher)
    .setColor('RANDOM')
    .setFooter('Steam Market')
    message.channel.send(embed).catch(e => {
        console.log(e)
        message.reply('Hata Olustu Yada `' + game + '` Adlı Oyun Bulunamadı')
    })
})
})
}}