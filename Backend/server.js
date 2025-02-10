//Importing the express module to create the server and manage server requests.
import express from "express";

import dotenv from "dotenv";
import dbConnect from "./database/dbConnect.js";

dotenv.config(); //this line configures the dotenv module to be used in the server

dbConnect(); //this line connects to the database

const app = express(); //this line creates an instance of the express module This is the core object of your web server, which will allow you to configure the server (e.g., define routes, set middleware, handle HTTP requests).

const PORT = process.env.PORT || 5000; //this line creates a port variable and assigns it to the port number 5000

//Starting the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
}); //this line makes the server listen to port 5000 and logs a message to the console when the server is running
