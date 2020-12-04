const router = require('express').Router()
var fire = require('./fire')
var body_parser = require('body-parser')
var db = fire.firestore()

router.get('/', (req, res)=>{
    const event = db.collection('Event').doc('8PeDD1zI517jOgnCDXQc')
    event.get().then(doc=>{n
        res.send(doc)
    })
})

module.exports = router