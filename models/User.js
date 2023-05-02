/* User Model */
const mongoose = require("mongoose");

/*
Add custom validation to the User model
Validate that the username is at least 4 characters long, doesn't contain spaces, and doesn't contain special characters
Also add a validation for checking password length. Password should be atleast 8 chaaacters long.
Throw an error is the Validation fails.
*/
const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      minlength: [4, "minimum should be 4"],
      validate: {
        validator: function (input) {
          let pattern = /^[a-zA-Z0-9]+$/;
          return pattern.test(input);
        },
        message: "no pattern validation matched",
      },
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      minlength: [8, "minimum should be 8"],
      validate: {
        validator: function (input) {
          let pattern = /^[a-zA-Z0-9]+$/;
          return pattern.test(input);
        },
        message: "no pattern validation matched",
      },
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
