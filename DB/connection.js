const mongoose = require('mongoose')

mongoose.connect(process.env.CONNECTION_STRING).then(
    result => {
        console.log("Mongodb Atlas connected with pfServer.....");
    }
).catch(err => {
    console.log("connection failed!!!");
    console.log(err);
})