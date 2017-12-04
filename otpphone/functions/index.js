const functions = require('firebase-functions');
const admin = require('firebase-admin');

const createUser = require('./routes/create_user');
const requestOtp = require('./routes/request_otp');
const verifyOtp = require('./routes/verify_otp');

const serviceAccount = require("./secret/firebaseadminkey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://otpphone-be037.firebaseio.com"
});

exports.createUser = functions.https.onRequest(createUser);
exports.requestOtp = functions.https.onRequest(requestOtp);
exports.verifyOtp = functions.https.onRequest(verifyOtp);