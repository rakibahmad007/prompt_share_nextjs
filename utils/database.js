import mongoose from 'mongoose';

let isConnected = false; //track the connection status

export const connectToDB = async () => {
    mongoose.set('strictQuery', true);
    //sets the mongoose options

    if (isConnected) {
        console.log('MongoDb is already connected!');
        return;
    }

    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName: "share_prompt",
            useNewUrlParser: true,
        })
        isConnected = true;

        console.log('MongoDb connected!');
    } catch (error) {
        console.log(error);
    }
}
