const Client = require('mpp-client-xt');
const Discord = require('discord.js');
var bot = new Discord.Client()
var gClient = new Client("ws://www.multiplayerpiano.com:443");
var defaultChannel = "lobby";
gClient.setChannel(defaultChannel);
gClient.start();
var ex = 0;
var ey = 0;
var banned = [];
var issweeping = false;
var animationtype = 1;
var botinvite = "https://discordapp.com/api/oauth2/authorize?client_id=491698661416239105&permissions=0&scope=bot";
var sayment = ['Want to vroom with any channels? you can use v!vroom [channel name]','BroomBot Discord Bot: https://discordapp.com/api/oauth2/authorize?client_id=491698661416239105&permissions=0&scope=bot']
var updatetrack = setInterval(function (){if (gClient.canConnect) {gClient.say('New Update Is Relased, Please Check It');clearInterval(updatetrack)}},100)
setInterval(function (){if (animationtype == 1){ex = ex + 5;if (ex > 100){ex = -100; ey = Math.floor(Math.random() * 100)}}if (issweeping){gClient.setName('vroom');}else{gClient.setName('vroom [v!help]');}},100);
setInterval(function (){if (animationtype == 2){ex = Math.floor(Math.random() * 100);ey = Math.floor(Math.random() * 100);}},100);
setInterval(function (){if (animationtype == 3){ex = 60;ey = 60;}})
setInterval(function (){gClient.moveMouse(ex,ey);},100);
setInterval(function (){if (!issweeping){gClient.say(sayment[Math.floor(Math.random()*sayment.length)])}},1000000)
gClient.on('a',function(msg){
   if (!banned.includes(msg.p._id)) {
   if (msg.a.split(' ')[0] == "v!vroom") {
     gClient.say('Vrooming to '+msg.a.split(' ').slice(1).join(' ')+' is now ready to go')
     issweeping = true;
     gClient.setChannel(msg.a.split(' ').slice(1).join(' '))
     setTimeout(function(){gClient.say('Well thats vroomed too much. Bye');gClient.setChannel(defaultChannel);issweeping = false;},50000)
   }
   if (msg.a == "vroomrules"){
      gClient.say(" ")
      gClient.say(" ")
      setTimeout(function () {gClient.say(" ")},10000)
      setTimeout(function () {gClient.say(" ")},20000)
   }
   if (msg.a == "b!help"){
      gClient.say("Normal Commands: v!vroom [channel name]")
      gClient.say("Discord Commands: v!discordbot, v!discord")
      gClient.say("Advanced: v!execute [command]")
   }
   if (msg.a == "b!discordbot"){
      gClient.say(botinvite);
      gClient.say('BroomBot Discord Bot');
   }
   if (msg.a == "v!discord") {
      gClient.say('https://discord.gg/Am53zEg');
      gClient.say('BroomBot Discord')
   }
   if (msg.a.split(' ')[0] == "v!bhammer" && msg.p.name == "xd") {
     
     banned.push(msg.a.split(' ')[1])
     gClient.say("Get Rekt. -> '+msg.p.name+'.")
     
   }
   if (msg.a.split(' ')[0] == "v!execute") {
     if (!msg.a.split(' ')[1]) {gClient.say('ADVANCED COMMANDS: v!execute animation, v!execute js [script]')}
     if (msg.a.split(' ')[1] == "animation") {
        if (!msg.a.split(' ')[2]) {
           gClient.say('you can type b!prompt animation [number] to animate like cool! (1 - default animation, 2 - crazy, 3 - still)')
        }else{
        animationtype = msg.a.split(' ')[2];
        gClient.say('O.K.')
        }
     }
     if (msg.a.split(' ')[1] == "js") {
        if (!msg.a.split(' ')[2]) {
           gClient.say('NO. THOTTIES.')
        }
     }
   }
   if (msg.a.split(' ')[0] == "v!default" && msg.p.name == "xd") {
     gClient.say('Default Channel set to '+msg.a.split(' ').slice(1).join(' '))
     defaultChannel = msg.a.split(' ').slice(1).join(' ')
     gClient.setChannel(defaultChannel)
     
   }
   }
   if (msg.a.startsWith("b!") && banned.includes(msg.p._id)) {
      
      gClient.say('XD SO FUNNY '+msg.p.name+'. <---- THEY GOT BANNED *chuckles*')
   }
   
})
bot.on('message',function (message) {
if (message.content.split(' ')[0] == "v!vroom") {
     message.channel.send('Vrooming to '+message.content.split(' ').slice(1).join(' ')+' is now ready to go')
     issweeping = true;
     gClient.setChannel(message.content.split(' ').slice(1).join(' '))
     setTimeout(function(){gClient.say('Well thats sweeped too much. Bye');gClient.setChannel(defaultChannel);issweeping = false;},50000)
   }
   if (message.content == "vroomrules"){
      message.channel.send(" ")
      message.channel.send(" ")
      message.channel.send(" ")
      message.channel.send(" ")
   }
   if (message.content == "v!help"){
      message.channel.send("Normal Commands: v!vroom [channel name]")
   }
   
   })

bot.on('ready',function(){
bot.user.setActivity("Use b!help for commands!", {
  type: "PLAYING"
});
})
bot.login(process.env.TOKEN)



