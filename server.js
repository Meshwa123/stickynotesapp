require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const userRouter = require('./routes/userRoutes');
const noteRouter = require("./routes/notesRouter");

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT;

// routes
app.use("/users", userRouter);
app.use("/api/notes", noteRouter);

// listen server
app.listen(PORT,()=>{
    console.log('Server is running on port ',PORT)
})

// connect to mongodb
const URL = process.env.MONGODB_URL;

mongoose.connect(URL)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error.message);
  });