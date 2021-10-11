const express = require("express");
//const knex = require("../knex")
const knex = require('./database');


const app = express();
const port = 9999 || process.env.PORT;

app.use(express.json());


// get all birthdays
app.get("/api/v1/birthdays", async (_, res) => {
    try{
        const users = await knex.select("*").table('users');
        if(users.length){
            res.status(200).send(users);
        } else {
            res.status(404).send("Bad Request")
        }  
    } catch (error){
        res.status(500).json({message: "Error geeting the user details", error: error})
    }
});

// get user details by name
app.get("/api/v1/birthday/:id", async (req, res) => {
    const { id } = req.params;
    try{
        const user = await knex.select("*").table('users').where(`id`, id);
        if(user) {
            res.status(200).send(user);
        } else {
            res.status(404).send("Record not found")
        }
    } catch (error){
        res.status(500).json({message: "Error geeting the user details", error: error})
    }
});

// add a new user
app.post("/api/v1/birthday", async (req, res) => {
    const { name, email, birthdate } = req.body;
    try{
        const users = await knex('users').insert({'name': name, 'email': email, 'birthdate': birthdate})
        if(users){
            res.status(201).send("Added");
        }else {
            res.status(404).send("Bad Rquest")
        }
    } catch (error){
        res.status(500).json({message: "Error adding the user", error: error})
    }
});

// update a user
app.patch("/api/v1/birthday/:id", async (req, res) => {
    const { id } = req.params;
    const modifier = req.body;

    try {
        const update =  await knex('users').where({id}).update(modifier);
        if (update){
            res.status(200).send("Update Successfully!")
        } else {
            res.status(404).send("Record not found")
        } 
    } catch (error){
        res.status(500).json({message: "Error updating user", error: error})
    }
});

// delete a user
app.delete("/api/v1/birthday/:id", async (req, res) => {
    const { id } = req.params;

    try {
        const update =  await knex('users').where({id}).del();
        if (update){
            res.status(200).send("Deleted Successfully!")
        } else {
            res.status(404).send("Record not found")
        } 
    } catch (error){
        res.status(500).json({message: "Error deleting the user", error: error})
    }
});


// health check
app.get("/api/v1/health", (_, res) => {
    res.status(200).send('OK');
})


app.listen(9999, () => {
    console.log(`Yaay, Server running at https://localhost:${port}!`);
});


