import mongoose from 'mongoose';

const dbConnect = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGODB_URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log(`MongoDb connected Successfully @${connect.connection.host}`);
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
};

export default dbConnect;
