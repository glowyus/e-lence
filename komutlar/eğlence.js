const Discord = require('discord.js');
exports.run = async (client, message, args) => { 
let prefix = '.'
let yardım = new Discord.MessageEmbed()  
.setAuthor(`${client.user.username}`, client.user.avatarURL())
.setColor('RANDOM')
.addField('Eğlence Menüsü',`
**.golat** : Gol Atarsınız
**.kartopu** : Etiketlediğiniz kişiye kar topu atarsınız.
**.espri** : Espri Yaparsınız.
**.avatar** : Etiketlediğiniz kişinin avatarını gösterir
**.atasözü** : Atasözü söyler.
**.duello** : Düello atarsın.
**.say** : Sunucu İstatistiklerini Açarsın.
**.sor** : Bota soru sorarsın.
**.yumruk-at** : Etiketlediğin Kişiye Yumruk Atarsın.
**.deyim** : Deyim söyler.`)
    .setImage("https://cdn.discordapp.com/attachments/952498151498059896/965641375829860362/standard.gif")
.setFooter(`${message.author.tag} Tarafından İstendi.`, message.author.avatarURL())
.setThumbnail(client.user.avatarURL())
 message.channel.send(yardım) 
  };

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['e'],
  permLevel: 0
};

exports.help = {
  name: "eğlence",
  category: "yardım",
    description: "Eğlence Komutları Gösterir."
};