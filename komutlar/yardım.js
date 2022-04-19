const Discord = require('discord.js');
exports.run = async (client, message, args) => { 
let prefix = '.'
let yardım = new Discord.MessageEmbed()  
.setAuthor(`${client.user.username}`, client.user.avatarURL())
.setColor('RANDOM')
.addField('Cexy v.01 \n\n> **Yardım Menüsü**',`
**.yardımcıkomutlar** : Yardımcı Komutları gösterir
**.eğlence** : Eğlence Komutları Açar.`)
    .setImage("https://cdn.discordapp.com/attachments/952498151498059896/965641375829860362/standard.gif")
.setFooter(`${message.author.tag} Tarafından İstendi.`, message.author.avatarURL())
.setThumbnail(client.user.avatarURL())
 message.channel.send(yardım) 
  };

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['y'],
  permLevel: 0
};

exports.help = {
  name: "yardım",
  category: "yardım",
    description: "Eğlence Komutları Gösterir."
};