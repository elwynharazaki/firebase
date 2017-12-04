const admin = require('firebase-admin');

module.exports = (req, res) => {
   // (TODO)
   // accept user phone number
   if (!req.body.phone) {
      return res
         .status(422)
         .send({ message: "Please enter your phone number" });
   }

   // Sanitizing
   const phone = String(req.body.phone)
                  .replace(/[^\d]/g,'');

   // (TODO)
   // register the phone number to firebase auth
   // if the number already registered, send error message
   // if the number are not registered, send success message
   admin.auth().createUser({ uid: phone })
      .then((user) => {
         return res.status(201).send(user);
      })
      .catch((error) => {
         return res.status(422).send(error);
      });
};