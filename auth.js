const express = require("express");
const bcrypt = require("bcrypt");
const User = require("../models/User");

const router = express.Router();

// Register Student or Faculty
router.post("/signup", async (req, res) => {
    try {
        const { username, password, role } = req.body;

        // Check if user already exists
        const existingUser = await User.findOne({ username });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }

        // Hash password before saving
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create new user
        const user = new User({ username, password, role });
        await user.save();
        res.status(201).json({ message: "User registered successfully" });

    } catch (err) {
        res.status(500).json({ message: "Server error", error: err });
    }
});

// Login Student or Faculty
router.post("/login", async (req, res) => {
    try {
        const { username, password, role } = req.body;

        // Check if user exists
        const user = await User.findOne({ username, role });
        if (!user) return res.status(401).json({ message: "Invalid credentials" });

        // Verify password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(401).json({ message: "Invalid credentials" });

        res.status(200).json({ message: "Login successful", user });

    } catch (err) {
        res.status(500).json({ message: "Server error", error: err });
    }
});

module.exports = router;
