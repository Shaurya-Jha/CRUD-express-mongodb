const express = require("express");

// module that parses the request and creates a req.body object that we can access in our routes
const bodyParser = require("body-parser");

// config file for database connection
const dbConfig = require('./config/database.config.js');
// mongoose module
const mongoose = require("mongoose");

// user route for all the api methods
const UserRoute = require("./routes/user.route.js")

mongoose.Promise = global.Promise;

mongoose.connect(dbConfig.url)
.then(() => {
    console.log("Database connected successfully");
})
.catch((error) => {
    console.log("Could not connect to the database", error);

    // forcefully terminate the connection if not terminated properly
    // manually closing the server connection
    process.exit();
})

const app = express();

// middleware
app.use(bodyParser.urlencoded({
    extended: true
}));

// simple route that returns a welcome message
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.json({
        "message":"Hello CRUD Node Express"
    })
});

app.use("/user", UserRoute)

app.listen(3000, () => {
    console.log('Server is listening on port 3000');
})