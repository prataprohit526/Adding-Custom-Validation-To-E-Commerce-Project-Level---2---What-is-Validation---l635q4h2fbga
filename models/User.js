/* User Model */
const mongoose = require('mongoose');

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
            //Add a Custom Validation Here
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true,
            //Add a Custom Validation Here
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model('User', userSchema);

