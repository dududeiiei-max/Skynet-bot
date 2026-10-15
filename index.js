const bedrock = require('bedrock-protocol');
const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Bot is running!\n');
});
server.listen(process.env.PORT || 3000);

function createBot() {
  const client = bedrock.createClient({
    host: 'MinestableSMP.aternos.me',
    port: 13195,
    username: 'SKYNET_BOT',
    offline: true
    version: '1.26.52.3'
  });

  client.on('join', () => {
    console.log('Bot joined the Bedrock server successfully!');
  });

  client.on('error', (err) => {
    console.log('Connection error:', err);
  });

  client.on('close', () => {
    console.log('Connection closed, trying to reconnect in 10 seconds...');
    setTimeout(createBot, 10000);
  });
}

createBot();
