import mongoose from 'mongoose';

export const connect = async () => {
    try { 
        await mongoose.connect(process.env.DB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Connect database successfully');
    } catch (error) {
        console.log(error);
    }
}
