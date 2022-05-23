const { db, admin } = require('../util/admin')
const firebaseConfig = require('../util/Config')
const firebase = require('firebase/app');


exports.getScheduledJobs = (req, res) => {

    // const newJob = {
    //     customerName: req.body.customerName,
    //     mobile: req.body.mobile,
    //     eircode: req.body.eircode,
    //     installDate: req.body.installDate,
    //     referenceID: req.body.referenceID,
    //     jobStatus: req.body.jobStatus,



    // };
    let jobData = {};
    db.doc(`/jobs/${req.params.referenceID}`).get()
        .then(doc => {
            if (!doc.exists) {
                return res.status(404).json({ error: 'Job not found' })
            }
            jobData = doc.data();
            jobData.referenceID = doc.id;
            return db
                .collection('customerName')
                .where('refernceID', '==', req.params.referenceID)
                .get();
        })
        .then((data) => {
            jobData.referenceID = [];
            data.forEach((doc) => {
                jobData.customerName.push(doc.data())
            });
            return res.json(jobData)
        })
        .catch(err => {
            console.error(err)
        })




}

exports.scheduleJob = (req, res) => {

    const newJob = {
        customerName: req.body.customerName,
        mobile: req.body.mobile,
        eircode: req.body.eircode,
        installDate: req.body.installDate,
        referenceID: req.body.referenceID,
        jobStatus: req.body.jobStatus,



    };

    admin.firestore()
        .collection('schedule')
        .add(newJob)
        .then(doc => {
            res.json({ message: `document ${doc.id} created sucksexfully ` })
        })
        .catch(err => {
            res.status(500).json({ error: 'something went wrong' });
            console.error(err);
        });

}