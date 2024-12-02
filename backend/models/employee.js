const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    resetPasswordToken: String,
    resetPasswordExpires: Date,
});

const Employee = mongoose.model('Employee', employeeSchema);

module.exports = Employee;