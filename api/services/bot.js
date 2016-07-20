var TelegramBot=require('node-telegram-bot-api');
var token='Aqui va tu clave';
var bot= new TelegramBot(
    token,{
 polling:true   
});
bot.getMe().then(function (me) {
    console.log('Hola mi nombre es:'+ me.username);
});

bot.onText(/^\/yo soy(.+)$/,function (msg,match) {
    var name=match[1];
    console.log(msg);
    bot.sendMessage(msg.chat.id, `¡Hola ${name} !`).then(function () {
        console.log(`Saludando a ${name}`);
    });

});

bot.onText(/^\/foto (.+)$/,function (msg,match) {
    var obtener=msg.chat.id;
    var photo='assets/images/perro.jpg';
     bot.sendPhoto(obtener,photo);
        console.log(`Enviando a ${photo}`);
    });

    

bot.onText(/^\/ubicacion (.+)$/,function (msg,match) {
    var obtener=msg.chat.id;
     bot.sendLocation(obtener,20.2833,-98.7333);
        console.log(`Enviando ${-98.7333,20.2833}`);
    });

bot.onText(/^\/audio (.+)$/,function (msg,match) {
    var obtener=msg.chat.id;
    var audio='assets/audio/chaleco.mp3';
     bot.sendAudio(obtener,audio);
        console.log(`Enviando ${audio}`);
    });
    




