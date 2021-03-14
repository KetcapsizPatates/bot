const Discord = require('discord.js');
module.exports = {
    kod: "sunucu-ismi-değiştir",
    async run (client, message, args) {
        if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('Bu komutu kulanabilmek içın **YÖNETICI** rolüne sahıp olmalısın.')
        const pinkcode = args.slice(0).join(' ')
        if(!pinkcode) return message.channel.send(new Discord.MessageEmbed().setTitle('Sunucu ismi girin lütfen.'));
            message.guild.setName(pinkcode)
            message.channel.send(new Discord.MessageEmbed().setTitle('Başarıyla Sunucuyun Ismini Değiştırdınız.'));

        }
    }