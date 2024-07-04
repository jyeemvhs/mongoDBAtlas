var express = require('express');
var bodyParser = require('body-parser');

const mongoose = require("mongoose")

var routes = require("./routes");

var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/js', express.static('./public/js'));
app.use(routes);
//in below code, student is the name of the database.
//the password should really be stored in an environment variable.
    mongoose.connect("mongodb+srv://jeffreyyee:K4qJ2dwfnj6fPRiA@cluster0.mqi0nom.mongodb.net/student?retryWrites=true&w=majority&appName=Cluster0")
    .then(() => {
        app.listen(3000, () => {
            console.log("Server is running on port 3000")
        })
    })
    .catch((error) => {
        console.log(error)
    })

 