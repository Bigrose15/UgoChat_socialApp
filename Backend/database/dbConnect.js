import mongoose from "mongoose"; // Importing mongoose to connect to the database and create models for the database schema.

const dbConnect = async () => {
  try {
    // Connecting to the database using the MONGO_URI from the .env file.
    const connectDb = await mongoose.connect(process.env.MONGO_URI);

    console.log(`MongoDB Connected: ${connectDb.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1); // This line exits the process if there is an error connecting to the database.
  }
};

export default dbConnect;
