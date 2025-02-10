import { Schema, model } from "mongoose"; //this line is used to import the Schema and model from the mongoose module

const userSchema = new Schema(
  {
    fullName: {
      type: String,
      required: true,
      trim: true,
    },
    userName: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      minLength: 6,
      trim: true,
    },
    role: {
      type: String,
      required: true,
      default: "user",
    },

    profileImage: {
      type: String,
      default: "",
    },

    followers: {
      type: [String],
      default: [],
    },

    folowing: {
      type: [String],
      default: [],
    },

    bio: {
      type: String,
      default: "",
    },
  },
  { timeStamps: true }
);

const User = model("User", userSchema); //The model is created from the schema, the fisrt argument is the name of the model, and the second argument is the schema. The model is used to interact with the database.

export default User;
