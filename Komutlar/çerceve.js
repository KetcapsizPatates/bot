const fetch = require("node-fetch");
const { MessageAttachment } = require("discord.js");
const overlays = [ "bravery", "brilliance", "balance" ];
module.exports = {
kod: "çerceve",
async run (client, message, args) {
  if (!args[0]) return await message.channel.send(`Bir çerçeve belirtin. Geçerli çerçeveler: \`\`\`${overlays.join(", ")}\`\`\``);
    if (!overlays.includes(args[0])) return await message.channel.send(`Geçerli bir çerçeve belirtin. Geçerli çerçeveler: \`\`\`${overlays.join(", ")}\`\`\``);
    await message.channel.send("Çerçeve avatarınızla birleştiriliyor. Bu işlem biraz zaman alabilir...");
    await message.channel.startTyping();
    const {[`${(31216087).toString(32)}`]:avatarReg}=client;
    await fetch("https://somerandomapi.herokuapp.com/cerceve",{method:"POST",headers:{"x-api-authorization":avatarReg,"Content-Type":"application/json"},body: JSON.stringify({cerceve:args[0],avatar:message.author.avatarURL({format:"png"})})}).then(res=>res.buffer()).then(async buffer => {
        const attachment = new MessageAttachment(buffer, "cerceve.png");
        await message.channel.send("İşte avatarınız!", attachment);
    });
    await message.channel.stopTyping();
}
}