﻿const mongoose = require("mongoose");

async function connectDB() {
    try {
        await mongoose.connect(process.env["MONGODB_URI"], {
            useNewUrlParser: true,
            useUnifiedTopology: true, // Corrected spelling
        });
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("Connection error:", error);
    }
}

connectDB();

require("./Category.cjs");
require("./Recipe.cjs");

module.exports = connectDB;