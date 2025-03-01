import { Schema, model } from "mongoose";

const postSchema = new Schema(
  {
    postedBy: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    text: {
      type: String,
      maxLength: 500,
    },

    image: {
      type: String,
      default: "",
    },

    likes: {
      type: Number,
      default: 0,
    },

    replies: [
      {
        userId: {
          type: Schema.Types.objectId,
          ref: "User",
          required: true,
        },

        text: {
          type: String,
          maxLength: 500,
          required: true,
        },

        userProfileImage: {
          type: String,
          default: "",
        },

        username: {
          type: String,
        },
      },
    ],
  },
  { timestamps: true }
);

const Post = model("Post", postSchema);

export default Post;
