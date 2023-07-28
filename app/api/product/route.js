import { MongoClient,ObjectId } from "mongodb";
import { NextResponse } from "next/server";

export async function GET(request){
    
    
const uri = "mongodb+srv://aakashgupta:11k1shgupt1@cluster0.gg8nvkk.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri);
const query =  request.nextUrl.searchParams.get("query");
try {
    const database = client.db('stock');
    const notes = database.collection('items');

    // Query for a movie that has the title 'Back to the Future'
    const result = await notes.aggregate([
        {
          $match: {
            title: { $regex: query, $options: 'i' }, // Case-insensitive search by message
          },
        },
      ]).toArray();
      return NextResponse.json({result});
  
    // console.log(movie);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
}

}

export async function POST(request){
    
    
  const uri = "mongodb+srv://aakashgupta:11k1shgupt1@cluster0.gg8nvkk.mongodb.net/?retryWrites=true&w=majority";
  
  const client = new MongoClient(uri);
  let body = await request.json();
  console.log(body);
  try {
      const database = client.db('stock');
      const notes = database.collection('items');
  
      // Query for a movie that has the title 'Back to the Future'
      const movie = await notes.insertOne(body);
      
      // console.log(body);
      return NextResponse.json({movie,ok:true})
    } finally {
      // Ensures that the client will close when you finish/error
      await client.close();
  }
  
  }