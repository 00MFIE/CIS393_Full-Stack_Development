import express from "express";
import mongoose from "mongoose";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect("mongodb://localhost:27017/ProfileData");

//Schema that is in the database
const profileSchema = new mongoose.Schema({
  username: String,
  name: String,
  DOB: String,
  Country: String,
  Join: String,
  About: String,
});

const profile = mongoose.model("profile", profileSchema, "profile");

//find user by username
app.post("/check-user", async (req, res) => {
  const { username } = req.body;

  try {
    const user = await profile.findOne({ username: username });
    console.log("Found user:", user);
    if (user) {
      res.json({ exists: true, user });
    } else {
      res.json({ exists: false });
    }
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

//delete user route
app.delete("/delete-user/:username", async (req, res) => {
  const { username } = req.params;

  try {
    const result = await profile.findOneAndDelete({ username });

    if (result) {
      res.json({ success: true, message: "User deleted" });
    } else {
      res.json({ success: false, message: "User not found" });
    }
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

//add user route
app.post("/add-user", async (req, res) => {
  const { username, name, DOB, Country, Join, About } = req.body;

  try {
    // optional: prevent duplicates
    const existing = await profile.findOne({ username });
    if (existing) {
      return res.json({ success: false, message: "User already exists" });
    }

    const newUser = new profile({
      username,
      name,
      DOB,
      Country,
      Join,
      About,
    });

    await newUser.save();
    res.json({ success: true, user: newUser });
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

//update user
app.put("/update-user/:username", async (req, res) => {
  const { username } = req.params;

  try {
    const updatedUser = await profile.findOneAndUpdate(
      { username },
      req.body,
      { new: true }
    );

    if (updatedUser) {
      res.json({ success: true, user: updatedUser });
    } else {
      res.json({ success: false, message: "User not found" });
    }
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});