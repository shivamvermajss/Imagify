import mongoose from 'mongoose';

const connectDB = async () => {
    mongoose.connection.on('connected', () => {
        console.log('MongoDB connected successfully');
    });

    // Pass the DB name as an option instead of appending to the string
    await mongoose.connect(process.env.MONGODB_URI, {
        dbName: 'imagify'
    });
}

export default connectDB;