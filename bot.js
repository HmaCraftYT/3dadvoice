const Discord = require('discord.js');
const client = new Discord.Client();
 
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
 var prefix = "$";
 client.on('message',async Epic => {
  if(Epic.content.startsWith(prefix + "svonline")) {
  if(!Epic.guild.member(Epic.author).hasPermissions('MANAGE_CHANNELS')) return Epic.reply('❌ **ليس لديك الصلاحيات الكافية**');
  if(!Epic.guild.member(client.user).hasPermissions(['MANAGE_CHANNELS','MANAGE_ROLES_OR_PERMISSIONS'])) return Epic.reply('❌ **ليس معي الصلاحيات الكافية**');
  Epic.guild.createChannel(`Voice Online : [ ${Epic.guild.members.filter(m => m.voiceChannel).size} ]` , 'voice').then(c => {
    console.log(`Voice Online Is Activation In ${Epic.guild.name}`);
    c.overwritePermissions(Epic.guild.id, {
      CONNECT: false,
      SPEAK: false
    });
    setInterval(() => {
      c.setName(` Online :  ${Epic.guild.members.filter(m => m.voiceChannel).size} .`)
    },1000);
  });
  }
});
 
 
 
 
 
 
 
client.login(procees.env.BOT_TOKEN);
  

