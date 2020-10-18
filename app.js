const express = require('express');
const bodyParser = require('body-parser');
const genUsername = require(__dirname + "/name.js");


const app = express();
app.set('view engine', 'ejs');
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }))

let name = [];




app.get("/", (req, res) => {

    res.render("index", { usernames: name });

});


app.post("/", (req, res) => {
    category = req.body.category;
    name = genUsername(category);

    res.redirect("/");
});



app.listen(process.env.PORT || 3000, () => {
    console.log("Server listening on port");
});