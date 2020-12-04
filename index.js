const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const path = require('path')
const firebase = require('firebase')

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

var fire = firebase.initializeApp(config);
db = fire.firestore()
app.use(express.static(path.join(__dirname, 'public')))
app.get('/api/event', (req, res)=>{
    var data = []
    db.collection('Event')
    .orderBy('timestamp', 'desc').limit(20).get().then(snapshot =>{
        snapshot.forEach(hasil => {
            data.push(hasil.data())
            console.log(hasil.data())

        })
        res.send(data)
        }      
    )
})
app.get('/api/Course', (req, res)=>{
    var data = []
    db.collection('Course')
    .orderBy('timestamp', 'desc').limit(20).get().then(snapshot =>{
        snapshot.forEach(hasil => {
            data.push(hasil.data())
            console.log(hasil.data())

        })
        res.send(data)
        }      
    )
})

app.get('/api/SubmitCourse', (req, res) =>{
    console.log(req.body)
    res.json(req.params)
})

app.listen(PORT, () => console.log('Server started on port :', PORT));