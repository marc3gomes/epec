const express = require('express');
const app = express();
const path = require("path");

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use("/assets/css", express.static(__dirname + '/assets/css'));
app.use("/assets/js", express.static(__dirname + '/assets/js'));
app.use("/assets/img", express.static(__dirname + '/assets/img'));
app.use("/assets/fonts", express.static(__dirname + '/assets/fonts'));

app.set("view engine", "ejs");

app.get("/", function (req, res) {
    res.render("index");
})

const server = app.listen(process.env.PORT || 4000);
const partNumber = server.address().port;