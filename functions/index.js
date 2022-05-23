const functions = require('firebase-functions')

const cors = require("cors");


const app = require('express')();
app.use(cors({ origin: true }));

const { getAllRequests, createRequest, callbackRequest } = require('./handlers/Requests');
const { getScheduledJobs, scheduleJob } = require('./handlers/Jobs');
const { signUp } = require('./handlers/User');
const { admin } = require('./util/admin');

admin.firestore().settings({ ignoreUndefinedProperties: true });


//Request routes
app.get('/requests', getAllRequests);

//Create request route
app.post('/createRequest', createRequest);

//Create callback request route
app.post('/callbackRequest', callbackRequest);

//Get new job in firebase
app.get('/getScheduledJob:referenceID', getScheduledJobs);

//Create new job in firebase
app.post('/scheduleJob', scheduleJob);

//Sign-up route
app.post('/signup', signUp);

exports.api = functions.region('europe-west1').https.onRequest(app);

