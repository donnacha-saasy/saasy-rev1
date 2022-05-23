const { db, admin } = require("../util/admin");
const firebaseConfig = require("../util/Config");
const firebase = require("firebase/app");

exports.getAllRequests = (req, res) => {
  admin
    .firestore()
    .collection("quote-requests")
    .orderBy("createdAt", "desc")
    .get()
    .then((data) => {
      let requests = [];
      data.forEach((doc) => {
        requests.push({
          requestID: doc.id,
          ...doc.data(),
        });
      });
      return res.json(requests);
    })
    .catch((err) => console.error(err));
};

exports.createRequest = (req, res) => {
  const newRequest = {
    address: req.body.address,
    eircode: req.body.eircode,
    email: req.body.email,
    firstName: req.body.firstName,
    houseType: req.body.houseType,
    lastName: req.body.lastName,
    mobile: req.body.mobile,
    oilGas: req.body.oilGas,
    radAmount: req.body.radAmount,
    year: req.body.year,
    createdAt: new Date().toISOString(),
  };

  admin
    .firestore()
    .collection("quote-requests")
    .add(newRequest)
    .then((doc) => {
      res.json({ message: `document ${doc.id} created sucksexfully ` });
    })
    .catch((err) => {
      res.status(500).json({ error: "something went wrong" });
      console.error(err);
    });
};

exports.callbackRequest = (req, res) => {
  const newRequest = {
    email: req.body.email,
    firstName: req.body.firstName,

    lastName: req.body.lastName,
    mobile: req.body.mobile,

    createdAt: new Date().toISOString(),
  };

  admin
    .firestore()
    .collection("callbackRequests")
    .add(newRequest)
    .then((doc) => {
      res.json({ message: `document ${doc.id} created sucksexfully ` });
    })
    .catch((err) => {
      res.status(500).json({ error: "something went wrong" });
      console.error(err);
    });
};
