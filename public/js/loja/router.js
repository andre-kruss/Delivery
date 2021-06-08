const express = require("express");
const app = express();

// View engine
app.set('view engine', 'ejs');

app.get("/", (req, res) => {
    res.render("confirm");
})

app.listen(5502, () => {
    console.log("Tá rodando");
});



