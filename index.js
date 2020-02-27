const express = require("express");
const Datastore = require("nedb")
const app = express();
app.listen(3000)
app.use(express.static("public"))
app.use(express.json({ limit: "1mb" }));

const database = new Datastore("database1.db");
database.loadDatabase();



app.post("/api", (request, response) => {
    const data = (request.body);
    console.log (data)
    database.insert (data);
    response.send();"Hello!"
});