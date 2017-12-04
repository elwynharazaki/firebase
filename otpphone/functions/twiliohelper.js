const twilio = require('twilio');

const {
   accountSid,
   authToken
} = require('./secret/twiliokey');

// const client = new twilio(accountSid, authToken);
const client = new twilio('AC7c469e3bba5ea2931086ae4f111580bd', '000573b8ddf4076fc90986b352ff5814');

module.exports = client;