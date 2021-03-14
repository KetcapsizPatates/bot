const Discord = require('discord.js')
module.exports = {
kod: "komut-say",
async run (client, message, args) {
    
    const embed = new Discord.MessageEmbed()
    .setTitle(`${message.guild.name} - Komut Sayısı`)
    .setDescription('**\nToplam**  **' + client.commands.size + '** **Komut Vardır!**')
    .setColor("#ff0000")
    .setThumbnail('https://i.ibb.co/s2qGRFx/kod.png')
    .setTimestamp()
    .setFooter(message.author.username , message.author.avatarURL())

    return message.channel.send({embed});
    
    message.channel.send();
}
}