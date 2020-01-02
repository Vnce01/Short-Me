const connectDB = require('./config/db');

connectDB();

const User = require('./models/User');

let user = new User({name: '@Admin', email: 'Admin@123', password: '1234567', urls:[]});

async function createAdmin() {
try {
    await user.save();
    console.log('Admin created!');
} catch (err) {
    console.log(err);
}  
}

createAdmin();