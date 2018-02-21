const RtmClient = require('@slack/client').RtmClient;
const CLIENT_EVENTS = require('@slack/client').CLIENT_EVENTS;
const RTM_EVENTS = require('@slack/client').RTM_EVENTS;
const fetch = require("node-fetch");
const SpotifyWebApi = require('spotify-web-api-node');

const auth = require('./auth.js');

const spotifyApi = new SpotifyWebApi({
    clientId : auth.spotifyID,
    clientSecret : auth.spotifySecret,
});
spotifyApi.setAccessToken(auth.spotifyToken);


const bornRuffians = '7wGrLSB3v7jkV3fSsjYwtv'

spotifyApi.getArtistAlbums(bornRuffians)
  .then(function(data) {
    console.log('Artist albums', data.body);
    // get all the album IDs into a new array 
    //return the album ID array 
  }, function(err) {
    console.error(err);
  });

  //randomly pick an id from the array
  //get all the tracks associated with that album 
  //randomly pick a track & get id 

  //from the track id get the link

  //slackbot posts the link to the random born ruffians song!
  




//slack stuff
// const rtm = new RtmClient(`${auth.slackToken}`);
// rtm.start();

// let channel; 

// rtm.on(CLIENT_EVENTS.RTM.AUTHENTICATED, (rtmStartData) => {
//    channel = rtmStartData.groups[0].id;
//     // channel = rtmStartData.groups.map((group) => {
//     //     if(group.name === 'slackbot-testing'){
//     //         // group.id = ...group.id;
//     //         return group.id; 
//     //     }
//     // });
//     console.log(`Logged in as ${rtmStartData.self.name} of team ${rtmStartData.team.name}`);
//   });


//   rtm.on(CLIENT_EVENTS.RTM.RTM_CONNECTION_OPENED, function () {
//     rtm.sendMessage("Hello!", channel);
//   });


//   rtm.on(RTM_EVENTS.MESSAGE, function(message) {
//     const keyWords = ['best band', 'greatest band', 'best artist']; 
//     keyWords.map((word)=>{
//         if(message.channel === channel && message.text.includes(word)){
//             rtm.sendMessage('the born ruffians are the best band!', channel);
//         }
//     });
//     if(message.channel=== channel && message.text.includes('song')){
//         //return the sharable link of a random born ruffians song
//     } 
// });


