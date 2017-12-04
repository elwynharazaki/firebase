const admin = require('firebase-admin');
const Phone = require('phone');
const axios = require('axios');

const client = require('./../twiliohelper');
// const headers = require('./../secret/mesabotkey');

module.exports = (req, res) => {
   if (!req.body.phone) {
      return res
         .status(422)
         .send({ message: "Please enter your phone number" });
   }

   const phone = String(req.body.phone)
                  .replace(/[^\d]/g,'');

   admin.auth().getUser(phone)
      .then((userRecord) => {
         // TODO
         // Create Code
         const number = Math.random() * 8999 + 1000;
         const code = Math.floor(number);

         const localPhone = Phone(phone, 'ID')[0];

         // TODO
         // Send SMS

         twilio.messages.create({
            body: 'Your Code is' + code,
            to: phone,
            from: '+12348134131'
         }, (err) => {
               if (err) {
                  return res.status(422).send(err);
               }
            }
         )

         // axios({
         //    method: "POST",
         //    url: "https://mesabot.com/api/v2/send",
         //    data: {
         //       'destination': phone,
         //       'text': 'Your Code is: ' + code,
         //    },
         //    headers: headers
         //  })
         .then(() => {
            admin.database().ref('users/' + phone)
            .update({ code: code})
               .then(() => {
                  res.send({ message: 'Code has been sent'});
               })
               .catch((error) => {
                  res.status(422).send(error);
               })
         })
         .catch((error) => {
            res.status(422).send(error);
         })
      })
      .catch((error) => {
         res.status(422).send(error);
      });

}