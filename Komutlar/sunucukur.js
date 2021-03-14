module.exports = {
    kod: "sunucukur",
    async run (client, message, args) {
        if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('Buna İznin Yok!!!');
        message.guild.channels.cache.forEach((item, i) => {
            try {
          item.delete()
          } catch(e) {
            console.log(e)
        }
        });
        message.guild.channels.create('|▬▬|GENEL KANALLAR|▬▬|', { type: 'category'}).then(genel => {
            message.guild.channels.create('|▬▬|ÖNEMLİ KANALLAR|▬▬|', { type: 'category'}).then(önemli => {
                message.guild.channels.create('|▬▬|OYUN ODALARI|▬▬|', { type: 'category'}).then(oyun => {
                    message.guild.channels.create('|▬▬|SES KANALLARI|▬▬|', { type: 'category'}).then(ses => {
                        message.guild.channels.create('|▬▬|AFK|▬▬|', { type: 'category'}).then(afk => {
                            message.guild.channels.create('「💬」sohbet', {type: 'text'}).then(sohbet => {
                                sohbet.setParent(genel.id)
                                sohbet.send('Sunucuyu Başarıyla Adam Akıllı Ettim')
                            })
                            message.guild.channels.create('「🤖」bot-komutları', {type: 'text'}).then(sohbet => {
                                sohbet.setParent(genel.id)
                            })
                            message.guild.channels.create('「💡」şikayet-ve-öneri', {type: 'text'}).then(sohbet => {
                                sohbet.setParent(genel.id)
                            })
                            message.guild.channels.create('「🎮」oyun-arama-odası', {type: 'text'}).then(sohbet => {
                                sohbet.setParent(genel.id)
                            })
                            message.guild.channels.create('「🎵」müzik-arama-odası', {type: 'text'}).then(sohbet => {
                                sohbet.setParent(genel.id)
                            })
                            message.guild.channels.create('「📢」duyuru-odası', {type: 'text'}).then(sohbet => {
                                sohbet.setParent(önemli.id)
                            })
                            message.guild.channels.create('「✅」sayaç', {type: 'text'}).then(sohbet => {
                                sohbet.setParent(önemli.id)
                            })
                            message.guild.channels.create('「🚪」gelen-giden', {type: 'text'}).then(sohbet => {
                                sohbet.setParent(önemli.id)
                            })
                            message.guild.channels.create('「🏁」başlangıç-odası', {type: 'text'}).then(sohbet => {
                                sohbet.setParent(önemli.id)
                            })
                            message.guild.channels.create('「📃」kurallar', {type: 'text'}).then(sohbet => {
                                sohbet.setParent(önemli.id)
                            })
                            message.guild.channels.create('「💾」log-kanalı', {type: 'text'}).then(sohbet => {
                                sohbet.setParent(önemli.id)
                            })
                            message.guild.channels.create('CSGO-1', {type: 'voice'}).then(sohbet => {
                                sohbet.setParent(oyun.id)
                            })
                            message.guild.channels.create('CSGO-2', {type: 'voice'}).then(sohbet => {
                                sohbet.setParent(oyun.id)
                            })
                            message.guild.channels.create('AMONG US-1', {type: 'voice'}).then(sohbet => {
                                sohbet.setParent(oyun.id)
                            })
                            message.guild.channels.create('AMONG US-2', {type: 'voice'}).then(sohbet => {
                                sohbet.setParent(oyun.id)
                            })
                            message.guild.channels.create('VAROLANT-1', {type: 'voice'}).then(sohbet => {
                                sohbet.setParent(oyun.id)
                            })
                            message.guild.channels.create('VAROLANT-2', {type: 'voice'}).then(sohbet => {
                                sohbet.setParent(oyun.id)
                            })
                            message.guild.channels.create('PUBG-PUBG MOBİLE-1', {type: 'voice'}).then(sohbet => {
                                sohbet.setParent(oyun.id)
                            })
                            message.guild.channels.create('PUBG-PUBG MOBİLE-2', {type: 'voice'}).then(sohbet => {
                                sohbet.setParent(oyun.id)
                            })
                            message.guild.channels.create('DİĞER OYUNLAR', {type: 'voice'}).then(sohbet => {
                                sohbet.setParent(oyun.id)
                            })
                            message.guild.channels.create('Sohbet Odası 1', {type: 'voice'}).then(sohbet => {
                                sohbet.setParent(ses.id)
                            })
                            message.guild.channels.create('Sohbet Odası 2', {type: 'voice'}).then(sohbet => {
                                sohbet.setParent(ses.id)
                            })
                            message.guild.channels.create('Sohbet Odası 3', {type: 'voice'}).then(sohbet => {
                                sohbet.setParent(ses.id)
                            })
                            message.guild.channels.create('AFK', {type: 'voice'}).then(sohbet => {
                                sohbet.setParent(afk.id)
                            })
                        })
                    })
                })
            })
        })
        /*/message.guild.roles.create({ data: { name: "Kurucu", color: "RED", permissions: ["ADMINISTRATOR"]}})
        message.guild.roles.create({ data: { name: "Moderatör", color: "GREEN", permissions: ["CREATE_INSTANT_INVITE", "CHANGE_NICKNAME", "VIEW_CHANNEL", "MANAGE_CHANNELS", "KICK_MEMBERS", "BAN_MEMBERS", "MANAGE_MESSAGES"]}})
        message.guild.roles.create({ data: { name: "Bot", color: "BLUE", permissions: ["ADMINISTRATOR"]}})
        message.guild.roles.create({ data: { name: "V.I.P", color: "BLUE", permissions: ["CREATE_INSTANT_INVITE", "CHANGE_NICKNAME", "VIEW_CHANNEL", "SEND_MESSAGES", "ATTACH_FILES", "SEND_TTS_MESSAGES", "READ_MESSAGE_HISTORY", "MENTION_EVERYONE", "USE_EXTERNAL_EMOJIS", "CONNECT", "SPEAK", "USE_VAD"]}})
        message.guild.roles.create({ data: { name: "Çekiliş", color: "RED", permissions: ["CREATE_INSTANT_INVITE", "CHANGE_NICKNAME", "VIEW_CHANNEL"]}})
        message.guild.roles.create({ data: { name: "Üye", color: "WHİTE", permissions: ["CREATE_INSTANT_INVITE", "CHANGE_NICKNAME", "VIEW_CHANNEL"]}})/*/
    }
}