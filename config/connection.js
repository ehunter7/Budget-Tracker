// Add your connection string into your application code


const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://ehunter:<password>@cluster0.d2o6s.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});

// Replace <password> with the password for the ehunter user. Replace myFirstDatabase with the name of the database that connections will use by default. Ensure any option params are URL encoded.


// Unsure if this goes here or in server
mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost/deep-thoughts',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  }
);