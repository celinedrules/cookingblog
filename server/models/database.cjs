const mongoose = require("mongoose");

/**
 * Asynchronously connects to the MongoDB database using the URI stored in the environment variable.
 * Logs a success message upon connection, and logs an error message if the connection fails.
 *
 * @returns {Promise<void>} A promise that resolves when the connection is established.
 */
async function connectDB() {
    try {
        // Attempt to connect to the MongoDB database using the connection URI from environment variables.
        // `useNewUrlParser`: Opts for the new URL string parser instead of the deprecated one.
        // `useUnifiedTopology`: Ensures MongoDB driver uses the new connection management engine.
        await mongoose.connect(process.env["MONGODB_URI"], {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        // Log a message to the console if the connection is successful.
        console.log("Connected to MongoDB");
    } catch (error) {
        // Log an error message if the connection fails, including the specific error encountered.
        console.error("Connection error:", error);
    }
}

// Execute the database connection function when this file is loaded.
connectDB();

// Require additional modules for the app, ensuring necessary schemas or models are available.
require("./Category.cjs");
require("./Recipe.cjs");

// Export the connectDB function to allow use in other parts of the application if needed.
module.exports = connectDB;