import nodemailer from "nodemailer";
import express from "express";
const app = express()

app.post("/send-email", (req, res) => {
        console.log("Email enviado");
})

app.listen(3000, ()=> {
    console.log("Servidor en -> http://localhost:3001");
})

