const express =  require('express');
const app = express();

app.set("view engine", "ejs");

app.use("/assets/css", express.static(__dirname + '/assets/css'));
app.use("/assets/js", express.static(__dirname + '/assets/js'));
app.use("/assets/img", express.static(__dirname + '/assets/img'));
app.use("/assets/fonts", express.static(__dirname + '/assets/fonts'));

app.get("/", function (req, res) {
    res.render("index");
})

app.listen(8080)