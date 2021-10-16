import mongoose from 'mongoose';

export const connect = async () => {
    try { 
        await mongoose.connect(process.env.DB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            /* useFindAndModify: false, */
            /* useCreateIndex: true */
        });
        console.log('Connect database successfully');
    } catch (error) {
        console.log('Connect database failure');
    }
}
