require('dotenv').config();

const { MongoClient } = require("mongodb");

// Replace the uri string with your MongoDB deployment's connection string.
const uri = process.env.MONGO_URI;

const client = new MongoClient(uri);

async function run() {
  try {
    // connect to client
    await client.connect();
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);
