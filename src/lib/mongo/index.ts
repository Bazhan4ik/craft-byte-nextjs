import { MongoClient } from "mongodb";



const URI = process.env.MONGO_URI;
const options = {};




if (!URI) throw new Error("MONGO_URI not found");

const mongoClient = new MongoClient(URI, options);
const clientPromise = mongoClient.connect();



export const dbPromise = clientPromise.then(client => client.db("craftbyte"));;