
const { db, admin } = require('../util/admin')
const config = require('../util/Config')
const firebase = require('firebase/app');


exports.signUp = (req, res) => {
    const newUser = {
        email: req.body.email,
        password: req.body.password,
        confirmPassword: req.body.confirmPassword,
        handle: req.body.handle,
    };
    //TODO: validate date

    firebase.auth().createUserWithEmailAndPassword(newUser.email, newUser.password)
        .then(data => {
            return res.status(201).json({ message: `user ${data.user.uid} signed up successfully` });
        })
        .catch(err => {
            console.error(err);
            return res.status(500).json({ error: err.code });
        });
}