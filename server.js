const express = require("express");
const app = express();
const port = 4000;

const bcrypt = require("bcryptjs");
const session = require("express-session");
const { Post, User, Comment } = require("./models");
require("dotenv").config();

// middleware
app.use((req, res, next) => {
    console.log(`Request: ${req.method} ${req.originalUrl}`);
    res.on("finish", () => {
      console.log(`Response Status: "${res.statusCode}`);
    });
    next();
  });
  
  app.use(express.json());
  
  app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
  });
  
  app.use(
    session({
      secret: process.env.SESSION_SECRET,
      resave: false,
      saveUninitialized: false,
      cookie: {
        maxAge: 3600000
      },
    })
  );
  
  const authenticateUser = (req, res, next) => {
    if (!req.session.userid) {
      return res
        .status(401)
        .json({ message: "You must be logged in to view this page." });
    }
    next();
  };

  app.get("/", (req, res) => {
    res.send("Welcome to my blog...");
  });

  