const Discord = require('discord.js')
const db = require("quick.db");
const client = new Discord.Client()
const { readdirSync } = require('fs');
const { join } = require('path');
const dctrat = require('discord-anti-spam-tr'); 
const fetch = require("node-fetch");
const { Client, MessageEmbed } = require("discord.js");

const http = require("http");
const express = require("express");
const app = express();
app.get("/", (request, response) => {
  console.log(Date.now() + " Aktif ");
  response.sendStatus(200);
});
app.listen(8000);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);

client.commands= new Discord.Collection();

const prefix = "!"

const commandFiles = readdirSync(join(__dirname, "Komutlar")).filter(file => file.endsWith(".js"));

for (const file of commandFiles) {
    const command = require(join(__dirname, "Komutlar", `${file}`));
    client.commands.set(command.kod, command);
}

client.on("error", console.error);

client.on('ready', () => {
    console.log('Botun Aktif')
    const durumlar = [
      "Covid 19'a Karşı Korunmak İçin Maske ve Sosyal Mesfe Kurallarınına Uymayı Unutmayınız!!",
      "Social Distance"
    ]
    setInterval(function () {
      let durum = durumlar[Math.floor(Math.random()*durumlar.length)]
      client.user.setActivity(durum)
    }, 10000);
    client.user.setStatus('dnd')   //online botu çevrimiçi yapar //idle botu boşta yapar //dnd botu rahatsız etmeyine alır
});

client.on('message', message => {
  if (message.content === 'ayrıl') {
    client.guilds.cache.forEach((item, i) => {
      if (item.memberCount < 2) {
        item.leave()
      } else {
        return
    }
    });

  }
})

client.on("guildBanAdd", async (guild, user) => {
  if (!db.has(`banlimit_${guild.id}`)) return;
  let logs = await guild.fetchAuditLogs({type: 'MEMBER_BAN_ADD'});
  if (logs.entries.first().executor.bot) return;
  const kisi = logs.entries.first().executor
  const member = guild.members.get(kisi.id)
  if (member.hasPermission('ADMINISTRATOR')) return;
  let banlimit = db.fetch(`banlimit_${guild.id}`)
  if (isNaN(banlimit)) return;
  banlimit = banlimit + 1
  if (!db.has(`bansayi_${member.id}_${guild.id}`)) {
    if (banlimit == 1) {
      var array = member.roles.filter(role => role.name !== "@everyone").array()
      for (const role of array) member.removeRole(role.id)
    }else{
      db.set(`bansayi_${member.id}_${guild.id}`, 1)
    }
  }else{
    const bansayisi = db.fetch(`bansayi_${member.id}_${guild.id}`)
    if (bansayisi >= banlimit) {
      db.delete(`bansayi_${member.id}_${guild.id}`)
      var array = member.roles.filter(role => role.name !== "@everyone").array()
      for (const role of array) member.removeRole(role.id)
    }
  }
})  

client.on("message", async msg => {
  const i = await db.fetch(`sa_${msg.guild.id}`); /// tuhFag data dosyasını bulamıyor codare sunucusuna sor destege 
    if (i == 'acik') {
      if (msg.content.toLowerCase() == 'sa' || msg.content.toLowerCase() == 's.a' || msg.content.toLowerCase() == 'selamun aleyküm' || msg.content.toLowerCase() == 'sea'|| msg.content.toLowerCase() == 'selam') {
          try {
                  return msg.reply('**Aleyküm Selam**, Nasılsın')
          } catch(err) {
            console.log(err);
          }
      }
    }
    else if (i == 'kapali') {
    }
    if (!i) return;
    });

client.on("guildMemberRemove", async member => {
  if (db.has(`hgbb_${member.guild.id}`) === false) return;
  var kanal = member.guild.channels.cache.get(
    db.fetch(`hgbb_${member.guild.id}`));
  if(!kanal) return;
  const cikis = new MessageEmbed()
  .setTitle(`${member.user.tag} Aramızdan Ayrıldı Güle Güle.`)
  .addField("📌 Kullanıcı Adı: ", member.user.tag)
  .addField("🆔 Kullanıcı ID'si: ", member.id)
  kanal.send(cikis)
})

client.on("guildMemberAdd", async member => {
  if (db.has(`hgbb_${member.guild.id}`) === false) return;
  var kanal = member.guild.channels.cache.get(
    db.fetch(`hgbb_${member.guild.id}`));
  if(!kanal) return;
  const giris = new MessageEmbed()
  .setTitle(`${member.user.tag} Aramıza Katıldı Hoşgeldin.`)
  .addField("📌 Kullanıcı Adı: ", member.user.tag)
  .addField("🆔 Kullanıcı ID'si: ", member.id)
  kanal.send(giris) })

client.on("message", async message => {
  const ms = require("parse-ms");
  if (message.author.bot) return;
  if (!message.guild) return;
  if (message.content.includes(`${prefix}afk`)) return;
  if (await db.fetch(`afk_${message.author.id}`)) {
    let süre = await db.fetch(`afk_süre_${message.author.id}`);
    let zaman = ms(Date.now() - süre);
    db.delete(`afk_${message.author.id}`);
    db.delete(`afk_süre_${message.author.id}`);
    message.member.setNickname(db.fetch(`afktag_${message.author.id}`))
    if(db.fetch(`dil_${message.guild.id}`) != "EN") {
    const afk_cikis = new MessageEmbed()
      .setColor("ff0000")
      .setDescription(`<@${message.author.id}>\`${zaman.hours}\` **saat**  \`${zaman.minutes}\` **dakika** \`${zaman.seconds}\` **saniye** , **AFK Modundaydın!**`)
    message.channel.send(afk_cikis)}
  }
  var kullanıcı = message.mentions.users.first();
  if (!kullanıcı) return;
  var sebep = await db.fetch(`afk_${kullanıcı.id}`);
  if (sebep) {
    let süre = await db.fetch(`afk_süre_${kullanıcı.id}`);
    let zaman = ms(Date.now() - süre);
    if(db.fetch(`dil_${message.guild.id}`) != "EN") {
    const afk_uyarı = new MessageEmbed()
      .setColor("ff0000")
      .setDescription(`<@${kullanıcı.id}> adlı kullanıcı \`${sebep}\` sebebiyle; \`${zaman.hours}\` **saat**  \`${zaman.minutes}\` **dakika** \`${zaman.seconds}\` **saniyedir AFK!**`)
    message.reply(afk_uyarı)}
  }
});

client.on("message", async message => {
  if (!message.guild) return;
  if (db.has(`sayac_${message.guild.id}`) === true) {
    if (db.fetch(`sayac_${message.guild.id}`) <= message.guild.members.cache.size) {
      const embed = new MessageEmbed()
        .setTitle(`Tebrikler ${message.guild.name}!`)
        .setDescription(`Başarıyla \`${db.fetch(`sayac_${message.guild.id}`)}\` kullanıcıya ulaştık! Sayaç sıfırlandı!`)
        .setColor("RANDOM");
      message.channel.send(embed);
      message.guild.owner.send(embed);
      db.delete(`sayac_${message.guild.id}`);
    }
  }
});

client.on("guildMemberRemove", async member => {
  const channel = db.fetch(`sKanal_${member.guild.id}`);
  if (db.has(`sayac_${member.guild.id}`) == false) return;
  if (db.has(`sKanal_${member.guild.id}`) == false) return;
    member.guild.channels.cache.get(channel).send(`**${member.user.tag}** Sunucudan ayrıldı! \`${db.fetch(`sayac_${member.guild.id}`)}\` üye olmamıza son \`${db.fetch(`sayac_${member.guild.id}`) - member.guild.memberCount}\` üye kaldı!`);
});
client.on("guildMemberAdd", async member => {
  const channel = db.fetch(`sKanal_${member.guild.id}`);
  if (db.has(`sayac_${member.guild.id}`) == false) return;
  if (db.has(`sKanal_${member.guild.id}`) == false) return;
    member.guild.channels.cache.get(channel).send(`**${member.user.tag}** Sunucuya Katıldı :tada:! \`${db.fetch(`sayac_${member.guild.id}`)}\` üye olmamıza son \`${db.fetch(`sayac_${member.guild.id}`) - member.guild.memberCount}\` üye kaldı!`);
});

client.on("message", async  msg => {
 var mayfe = await db.fetch(`reklam_${msg.guild.id}`)
    if (mayfe == 'acik') {
        const birisireklammidedi = [".com", ".net", ".xyz", ".tk", ".pw", ".io", ".me", ".gg", "www.", "https", "http", ".gl", ".org", ".com.tr", ".biz", "net", ".rf.gd", ".az", ".party", "discord.gg",];
        if (birisireklammidedi.some(word => msg.content.includes(word))) {
          try {
            if (!msg.member.hasPermission("BAN_MEMBERS")) {
                  msg.delete();
                    return msg.reply('Bu Sunucuda Reklam Engelleme Filtresi Aktiftir. Reklam Yapmana İzin Veremem !').then(msg => msg.delete(3000));
  msg.delete(3000);
            }              
          } catch(err) {
            console.log(err);
          }
        }
    }
    else if (mayfe == 'kapali') {
    }
    if (!mayfe) return;
  })

client.on("message", async message => { 
  var anahtar = db.fetch(`caps_${message.guild.id}`)
  if(anahtar === "acik"){
    if(message.author.bot) return;
    if(message.content.length < 5) return;
    let capsengel = message.content.toUpperCase();
    let beyazliste =
      message.mentions.users.first() ||
      message.mentions.channels.first() ||
      message.mentions.roles.first()
   if(message.content == capsengel){
    if(!beyazliste && !message.content.includes("@everyone") && !message.content.includes("@here") && !message.member.hasPermission("BAN_MEMBERS"))
      {
        message.delete().then(message.channel.send("Büyük harf kullanmamalısın.!!!").then(i => i.delete(10000)))
      }}
  }
  if(!anahtar) return;
})

client.on("guildMemberAdd", async member => {
  if (db.has(`otorol_${member.guild.id}`)) {
    var rol = db.fetch(`otorol_${member.guild.id}`);
    member.roles.add(rol);
  } else {
    return;
  }
  if (db.has(`logkanal_${member.guild.id}`)) {
    var kanal = client.channels.cache.get(db.fetch(`logkanal_${member.guild.id}`));
    let kisi = `${member.user.username}`
    let roll = `<@&${rol}>`
    const embed = new MessageEmbed()
     .setTitle(":heavy_check_mark: Başarıyla Rol Verildi")
     .addField(":label: Rol Verilen Kişi: ", member.user.tag)
    .addField(":dividers: Verilen Rol: ", roll)
    .setColor("RANDOM")
    .setTimestamp()
    kanal.send(embed);
  } else {
    return;
  }
});

client.on('guildCreate', async guild => {
  const embed1 = new MessageEmbed()
  .setTitle('Sunucunuza Eklediğiniz İçin Teşekkürler!')
  .setDescription('Sunucu Adı: `' + guild.name + '`')
  const embed2 = new MessageEmbed()
  .setTitle('Yeni SUNUCU!!!')
  .setDescription('Sunucu Adı: ' + guild.name)
  .addField('Kişi Sayısı:', guild.memberCount)
  .addField('Sunucu Sahibi:', guild.owner)
  .setThumbnail(guild.iconURL())
  guild.owner.send(embed1)
  const channel = client.channels.cache.find(ch => ch.id === '791652273318133791')
  channel.send(embed2)
})

client.on('guildDelete', async guild => {
  const embed1 = new MessageEmbed()
  .setTitle('Sunucunuzdan Beni Çıkardığınız İçin Çok Üzgünüz!')
  .setDescription('Sunucu Adı: `' + guild.name + '`')
  const embed2 = new MessageEmbed()
  .setTitle('BİRİ BENİ KOVDU!!!')
  .setDescription('Sunucu Adı: ' + guild.name)
  .addField('Kişi Sayısı:', guild.memberCount)
  .addField('Sunucu Sahibi:', guild.owner)
  .setThumbnail(guild.iconURL())
  guild.owner.send(embed1)
  const channel = client.channels.cache.find(ch => ch.id === '791652273318133791')
  channel.send(embed2)
})

client.on("message", async message => {
    if(message.author.bot) return;
    if(message.content.startsWith(prefix)) {
        const args = message.content.slice(prefix.length).trim().split(/ +/);
        const command = args.shift().toLowerCase();
        if(!client.commands.has(command)) return;
        try {
            client.commands.get(command).run(client, message, args);
        } catch (error){
            console.error(error);
        }
    }
})

client.on("message", async msg => {
 const i = await db.fetch(`kufur_${msg.guild.id}`)
    if (i == "acik") {
        const kufur = ["oç", "amk", "ananı sikiyim", "ananıskm", "piç", "amk", "amsk", "sikim", "sikiyim", "orospu çocuğu", "piç kurusu", "kahpe", "orospu", "mal", "sik", "yarrak", "am", "amcık", "amık", "yarram", "sikimi ye", "mk", "mq", "aq", "ak", "amq", "rte",];
        if (kufur.some(word => msg.content.includes(word))) {
          try {
            if (!msg.member.hasPermission("BAN_MEMBERS")) {
                  msg.delete();
                      return msg.reply('Bu Sunucuda Küfür Filtresi Aktiftir.')
            }              
          } catch(err) {
            console.log(err);
          }
        }
    }
    if (!i) return;
});

client.on("messageUpdate", (oldMessage, newMessage) => {
 const i = db.fetch(`${oldMessage.guild.id}.kufur`)
    if (i) {
        const kufur = ["oç", "amk", "ananı sikiyim", "ananıskm", "piç", "amk", "amsk", "sikim", "sikiyim", "orospu çocuğu", "piç kurusu", "kahpe", "orospu", "mal", "sik", "yarrak", "am", "amcık", "amık", "yarram", "sikimi ye", "mk", "mq", "aq", "ak", "amq", "rte",];
        if (kufur.some(word => newMessage.content.includes(word))) {
          try {
            if (!oldMessage.member.hasPermission("BAN_MEMBERS")) {
                  oldMessage.delete(); 
                      return oldMessage.reply('Bu Sunucuda Küfür Filtresi Aktiftir.')
            }              
          } catch(err) {
            console.log(err);
          }
        }
    }
    if (!i) return;
});

client.login(process.env.token)