// Old syntax (without "type": "module"):
// const express = require("express");
// New syntax (with "type": "module"):
import express from "express";
import cors from "cors";
import morgan from "morgan";

const app = express();
const PORT = process.env.PORT || 4567;

// Middleware
// express.json gives access to req.body
app.use(express.json());
app.use(cors());
// Change morgan after deployment once everything works ('tiny')
app.use(morgan("dev"));

app.get("/", (req, res) => res.send("<h1>Let's get stuff done!</h1>"))

app.listen(PORT, console.log(`Connected to port: ${PORT}`));