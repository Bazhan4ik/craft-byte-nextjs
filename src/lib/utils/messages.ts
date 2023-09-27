import { dbPromise } from "../mongo";




export async function createMessage(name: string, email: string, message: string) {
  const db = await dbPromise;


  const result = await db.collection("messages").insertOne({
    date: new Date(),
    name,
    email,
    message,
  });


  return result.acknowledged;
}