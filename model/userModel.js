const mongoose = require("mongoose");
var uuid = require("uuid");

let userSchema = new mongoose.Schema(
  {
    user_id: {
      type: String,
      default: uuid.v4,
    },
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    dob: {
      type: Date,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

mongoose.model("User", userSchema);
module.exports = mongoose.model("User");
