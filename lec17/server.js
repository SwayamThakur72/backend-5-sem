import express from "express";
import mongoose from "mongoose";    
const app = express();

app.use(express.json());

app.post("/users", async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).send(user);
  } catch (error) {
    res.status(400).send(error);
  }
});



mongoose.connect("mongodb://localhost:27017/mydatabase",)
.then(() => {
  console.log("Connected to MongoDB");
})
.catch((error) => {
  console.error("MongoDB connection error:", error);
});

app.listen(3 , () => {
  console.log("Server is running on port 3000");
}); 