const express = require('express');
const cors = require('cors');
const app = express()
const port = process.env.PORT||4000


app.use(cors());
app.use(express.json())



const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://userdb1:xQX6c0UL3mLLWNK9@cluster0.ja3y1.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function run(){
try{
    await client.connect()
    const dashboardCollection = client.db("allDashboard").collection("dashboard");
    app.get('/dashBoard',async(req,res)=>{
        const dashBoard = await dashboardCollection.find().toArray();
        res.send(dashBoard)
    })

}
finally{
    // client.close();
}
}
run().catch(console.dir)


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})