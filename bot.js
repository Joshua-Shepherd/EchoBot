//bot.js
//NOT WORKING:https://hackernoon.com/create-a-simple-twitter-bot-with-node-js-5b14eb006c08
var twit = require('twit');
var config = require('./config');

//pass config TO twit by creating object Twitter
var Twitter = new twit(config); 

 var retweet = () => {
     const params = {
         query: '#nodejs, #Nodejs', 
         result_type: 'recent',
         lang: 'en'

     }
 }

 Twitter.get('search/tweets', retweet, function(err, data) {
    // if there no errors
      if (!err) {
        // grab ID of tweet to retweet
          var retweetId = data.statuses[0].id_str;
          // Tell TWITTER to retweet
          Twitter.post('statuses/retweet/:id', {
              id: retweetId
          }, function(err, response) {
              if (response) {
                  console.log('Retweeted!!!');
              }
              // if there was an error while tweeting
              if (err) {
                  console.log('Something went wrong while RETWEETING... Duplication maybe...');
              }
          });
      }
      // if unable to Search a tweet
      else {
        console.log('Something went wrong while SEARCHING...');
      }
  });
