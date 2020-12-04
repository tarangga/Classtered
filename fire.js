var firebase = require('firebase')

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const config = {
    apiKey: "AIzaSyAxoiXSILqjHpX3TDXgFtM7K7I0Yc8_vX8",
    authDomain: "classtered.firebaseapp.com",
    databaseURL: "https://classtered.firebaseio.com",
    projectId: "classtered",
    storageBucket: "classtered.appspot.com",
    messagingSenderId: "138563249760",
    appId: "1:138563249760:web:ac3cb7c1fddb77a747c505",
    measurementId: "G-WS0Y4P75PT"
};

var fire = firebase.initializeApp(config)

module.exports = fire