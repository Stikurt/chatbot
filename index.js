const {Telegraf, Markup} = require('telegraf');

const bot = new Telegraf('6081522887:AAHcHcaSazFxlqHy1TtcawtMfHQUaxrb4fQ');

const started = [
    'Привет! Я Бот созданый студентом! вот мой команды: ',
    'Привет! Я Бот созданый студентом! человек по сути пончик! вот мой команды: ',
    'Привет! Я Бот созданый студентом! этого бота делал один человек! кто бы что не говорил! вот мой команды',
    'Привет! Я Бот созданый студентом!',
    'Привет! Я Бот созданый студентом! *Шепотом прошу убейте меня!* вот мой команды: '
];

const compliments  = [ 
    'твой зубы крепки как камен как камень!',
    'твой почки ценны как и все твой органы и соответственно ты тоже ценень',
    'хоть твой череп и маленкий но мозг огромный!',
    'твой айм таааак высок!',
    'ты органический перерабатоваемый! а это очень важно в наше время!',
    'может это к лучшему!?'
];

const poop = [
    'голодный еж',
    'пухлая белка',
    'гиганский свинка',
    'Игор',
    'пупырчеты камен',
    'кричаши слон',
    'падающи мангуст',
];


const keyboard = Markup.keyboard([
    ['Помощ'],
    ['Сказать комплимент'],
    ['Поменят комплимент'],
    ['твое везучое число на сегодня!'],
    ['кто я в душе?!']

]).resize().oneTime();

let currentCompliments = compliments[0];

bot.start((ctx) => {
    const randomindex2 = Math.floor(Math.random()* started.length);
    let currentstarted = started[randomindex2];
    ctx.reply( currentstarted, keyboard); 
});

bot.hears('Помощ', (ctx) => {
    ctx.reply('какой помощи ты ждещ? тут команд так мало что по пальцем одной руки можно перещитать. Ну это обезательно нужно так что вот тебе таблица с командами: ', keyboard);
});


bot.hears('Сказать комплимент', (ctx) => {
    console.log(currentCompliments)
    ctx.reply(currentCompliments, keyboard);
});

bot.hears('Поменят комплимент', (ctx) => {
    const randomindex = Math.floor(Math.random()* compliments.length);
    currentCompliments = compliments[randomindex];
    ctx.reply('новый комплимент: ' + currentCompliments, keyboard);

});

bot.hears('твое везучое число на сегодня!', (ctx) => {
    function getRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
      var randomNumber = getRandomNumber(100, 999);
      ctx.reply('ваша везучае число: ' + randomNumber);
});

bot.hears('кто я в душе?!', (ctx) => {
    const randomindex1 = Math.floor(Math.random()* poop.length);
    let poops = poop[randomindex1];
    ctx.reply('ты в душе: ' +  poops, keyboard);
});


bot.launch();