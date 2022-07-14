const Discord = require("discord.js");
const db = require("nrc.db")



module.exports = {
    calistir: async(client, message, args) => {

        if (!message.member.permissions.has("ADMINISTRATOR")) return message.reply(`   **Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.**`);
        let role = message.mentions.roles.first();
        let member = message.mentions.members.first();
        if (!role) return message.reply('Lütfen Vermek İstediğiniz Rolü Etiketleyin!')
        if (!member) return message.reply('Lütfen Rol Vermek İstediğiniz Kişiyi Etiketleyin!')
        member.roles.add(role)
        const embed = new Discord.MessageEmbed()
        .setTitle(`Roller Değiştirildi`)
        .setDescription(`**Rol Verilen Kullanıcı: **${message.mentions.users.first()}\n**Verilen Rol: **${role}\n**Yetkili: <@${message.author.id}>**`)
        .setTimestamp()
        .setImage("https://cdn.glitch.me/2f9a3bcc-456b-4787-9a0f-e65e286ea42e%2Fstandard_28.gif")
        .setColor('BLUE')
    
        message.channel.send({embeds: [embed]})
},

name: "rolver",
description: "İstediğin bir kişiye rol verirsin.",
aliases: [],
kategori: "mod",
usage: "",
}