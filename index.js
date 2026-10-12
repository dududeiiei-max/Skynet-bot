const mineflayer = require('mineflayer');

function createBot() {
  const bot = mineflayer.createBot({
    host: ''MinestableSMP.aternos.me,
    port: 13195,
    username: 'SKYNET_BOT',
    type: 'bedrock'
  });

  bot.on('spawn', () => {
    setInterval(() => {
      bot.setControlState('jump', true);
      setTimeout(() => bot.setControlState('jump', false), 500);
    }, 30000);
  });

  bot.on('end', () => {
    setTimeout(createBot, 10000);
  });

  bot.on('error', () => {});
}

createBot();
