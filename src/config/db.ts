import mongoose from 'mongoose';

export const connectDb = async () => {
  try {
    await mongoose.connect(
      'mongodb://fran:coderhouse2022@cluster1-shard-00-00.zzoqs.mongodb.net:27017,cluster1-shard-00-01.zzoqs.mongodb.net:27017,cluster1-shard-00-02.zzoqs.mongodb.net:27017/test?replicaSet=atlas-wwir4a-shard-0&ssl=true&authSource=admin',
      {}
    );
  } catch (error) {
    console.error(error);
  }
};
