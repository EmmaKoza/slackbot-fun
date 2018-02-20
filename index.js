const RtmClient = require('@slack/client').RtmClient;
const CLIENT_EVENTS = require('@slack/client').CLIENT_EVENTS;
const RTM_EVENTS = require('@slack/client').RTM_EVENTS;
const auth = require('./auth.js');


const rtm = new RtmClient(`${auth.token}`);
rtm.start();

let channel; 

rtm.on(CLIENT_EVENTS.RTM.AUTHENTICATED, (rtmStartData) => {
   channel = rtmStartData.groups[0].id;
    // channel = rtmStartData.groups.map((group) => {
    //     if(group.name === 'slackbot-testing'){
    //         // group.id = ...group.id;
    //         return group.id; 
    //     }
    // });
    console.log(`Logged in as ${rtmStartData.self.name} of team ${rtmStartData.team.name}`);
  });

  rtm.on(CLIENT_EVENTS.RTM.RTM_CONNECTION_OPENED, function () {
    rtm.sendMessage("Hello!", channel);
  });
