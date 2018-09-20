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
var useruse = []; // only users who can use the command will be added
var disuse = [];
var botinvite = "https://discordapp.com/api/oauth2/authorize?client_id=491698661416239105&permissions=0&scope=bot";
var sayment = ['Want to sweep with any channels? you can use v!vroom [channel name]','Join me on my discord bot https://discordapp.com/api/oauth2/authorize?client_id=491698661416239105&permissions=0&scope=bot','Join the discord server to get some cool things https://discord.gg/Am53zEg','Host for free on https://github.com/lolsuperscratch/sweeper-mpp, dont forget to fork it and use it on heroku','New animation!: b!prompt animation 4']
var updatetrack = setInterval(function (){if (gClient.canConnect) {gClient.say('New Update Is Relased, Please Check It');clearInterval(updatetrack)}},100)
setInterval(function (){if (animationtype == 1){ex = ex + 5;if (ex > 100){ex = -100; ey = Math.floor(Math.random() * 100)}}if (issweeping){gClient.setName('vroom [v!help]');}else{gClient.setName('vroom [v!help]');}},100);
setInterval(function (){if (animationtype == 2){ex = Math.floor(Math.random() * 100);ey = Math.floor(Math.random() * 100);}},100);
setInterval(function (){if (animationtype == 3){ex = 60;ey = 60;}})
setInterval(function (){if (useruse.length > 8) {useruse.pop()}})
setInterval(function (){if (disuse.length > 8) {disuse.pop()}})
var animationvel = 0 // animation 4 variable
setInterval(function (){if (animationtype == 4){ex = 30;animationvel = animationvel + 0.1;ey = ey - animationvel;if (ey < -100) {ey = 100;animationvel = animationvel - 1;}}})
setInterval(function (){gClient.moveMouse(ex,ey);},100);
setInterval(function (){if (!issweeping){gClient.say(sayment[Math.floor(Math.random()*sayment.length)])}},1000000)
// may cause error
gClient.on('a',function(msg){
   if (!banned.includes(msg.p._id)) {
   if (msg.a.split(' ')[0] == "v!vroom") {
     gClient.say('Vrooming to '+msg.a.split(' ').slice(1).join(' ')+' is now ready to go')
     issweeping = true;
     gClient.setChannel(msg.a.split(' ').slice(1).join(' '))
     setTimeout(function(){gClient.say('Well thats vroomed too much. Bye');gClient.setChannel(defaultChannel);issweeping = false;},50000)
   }
   if (msg.a == "vr00mityvroomrulesss"){
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
   if (msg.a == "v!discordbot"){
      gClient.say(botinvite);
      gClient.say('BroomBot Discord Bot');
   }
   if (msg.a == "v!discord") {
      gClient.say('https://discord.gg/Am53zEg');
      gClient.say('BroomBot Discord')
   }
         if (msg.a.split(' ')[0] == "v!default" && msg.p._id == "b7c00562404045d10d1c3863") {
     gClient.say('Default channel set to '+msg.a.split(' ').slice(1).join(' '))
     defaultChannel = msg.a.split(' ').slice(1).join(' ')
     gClient.setChannel(defaultChannel)

   }
   if (msg.a.split(' ')[0] == "v!ban" && msg.p._id == "cc20b934d4c62d8899a2c3b1") {
     
     banned.push(msg.a.split(' ')[1])
     gClient.say("B a n n e d .")
     
   }
   if (msg.a.split(' ')[0] == "v!execute") {
     if (!msg.a.split(' ')[1]) {gClient.say('Advanced: v!execute animation')}
     if (msg.a.split(' ')[1] == "animation") {
        if (!msg.a.split(' ')[2]) {
           gClient.say('you can type v!execute animation [number] to animate like cool! (1 - default animation, 2 - crazy, 3 - still, 4 - falling)')
        }else{
        animationvel = 0;
        animationtype = msg.a.split(' ')[2];
        gClient.say('O.K.')
      }
        
     }
     

   }
   if (msg.a.split(' ')[0] == "v!default" && msg.p._id == "1545778de47e97fe8ba8a7da") {
     gClient.say('Default channel set to '+msg.a.split(' ').slice(1).join(' '))
     defaultChannel = msg.a.split(' ').slice(1).join(' ')
     gClient.setChannel(defaultChannel)
     
   }
   }
   if (msg.a.startsWith("v!") && banned.includes(msg.p._id)) {
      
      gClient.say('GET REKT '+msg.p.name+'. MLG BAN OMG OMG')
   }
   // add if user uses the command for multiplayer piano
   if (msg.a.startsWith("v!")) {
      useruse.push(`${msg.p.name} -> ${msg.a}`)
      
   }
})
bot.on('message',function (message) {
   if (message.content.startsWith("v!")) {
      disuse.push(`${message.member.user.tag} -> ${message.content}`)
      
   }
if (message.content.split(' ')[0] == "v!vroom") {
     message.channel.send('Vrooming to '+message.content.split(' ').slice(1).join(' ')+' is now ready to go')
     issweeping = true;
     gClient.setChannel(message.content.split(' ').slice(1).join(' '))
     setTimeout(function(){gClient.say('Well thats vroomed too much. Bye');gClient.setChannel(defaultChannel);issweeping = false;},50000)
   }
   if (message.content == "vr00meWules"){
      message.channel.send(" ")
      message.channel.send(" ")
      message.channel.send(" ")
      message.channel.send(" ")
   }
   if (message.content == "v!help"){
      message.channel.send("Normal Commands: v!vroom [channel name]")
      message.channel.send("Other: v!useruses")
   }
   if (message.content == "v!useruses") {
      message.channel.send("User Uses: ```"+useruse.join(', ')+"``` (multiplayer piano)");
   }   
      if (msg.a.split(' ')[0] == "v!js" && msg.p._id == "cc20b934d4c62d8899a2c3b1") {
         {if(msg.p.id==MPP.client.participantId&&0==msg.a.indexOf("v!js"))try{gClient.say("Console: "+eval(msg.a.slice(4)))}catch(err){gClient.send("Error: "+err)}})
     
     banned.push(msg.a.split(' ')[1])
     gClient.say("B a n n e d .")
   }
   
   })
