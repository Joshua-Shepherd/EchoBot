//bot.js
//https://github.com/hoovercj/nodejs-twitterbot-tutorial/blob/master/README.md
const redis = require('redis');
const Twit = require('twit');
const config = require('../config.js');
//feed the config.js with our exported keys to twit module
const bot = new Twit(config);
//create a stream filter for what terms. https://developer.twitter.com/en/docs/tutorials/consuming-streaming-data
var stream = bot.stream('statuses/filter', {
    track: 'fun'
  });

stream.on('tweet', (tweet) => {
  console.log(tweet.text);
});

stream.on('limit', (limitMessage) => {
  console.log(limitMessage);
});

stream.on('disconnect', (disconnectMessage) => {
  console.log(disconnectMessage);
});

stream.on('reconnect', (req, res, connectInterval) => {
  console.log('Reconnecting in' + connectInterval + 'ms..');
})

stream.on('error', (error) => {
  console.log(error);
});





