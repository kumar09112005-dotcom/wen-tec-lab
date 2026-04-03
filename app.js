const { MongoClient } = require("mongodb");

const url = "mongodb://127.0.0.1:27017";
const client = new MongoClient(url);

async function run() {
  await client.connect();
  console.log("Connected to MongoDB");
}

run();