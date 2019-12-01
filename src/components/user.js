const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

// Players must be registered as users to enroll in clubs etc.
const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },

    club: {
        type: Boolean
    },
    // Save data people register
    created: {
        type: Date,
        default: Date.now
    }
    
});

// If the password has been modified skip, other wise encrypt passwords
// before they are saved to DB
userSchema.pre('save', async function (next) {
    try {
        if (!this.isModified('password')){
            return next();
        }
        // 10 is strength of enryption
        const hashed = await bcrypt.hash(this.password, 10);
        this.password = hashed;
        return next();
    } catch (error) {
        return next(error);
    }
});

// Compare the tried password to encrypted one
userSchema.methods.comparePassword = async function(attempted, next){
    try{
        return await bcrypt.compare(attempted, this.password);
    } catch(error){
        next(error);
    }
}

module.exports = mongoose.model('User', userSchema);