const express = require("express");
const knex = require("../knex")


const app = express();
const port = 9999 || process.env.PORT;

app.use(express.json());


app.get("/api/v1/birthdays", async (_, res) => {
    res.status(200).send("All Birthdays will be listed here!!")
});



app.listen(9999, () => {
    console.log(`Yaay, Server running at https://localhost:${port}!`);
});


