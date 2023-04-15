const { MongoClient, ObjectId } = require('mongodb')
// C:\Users\DELL\mongodb\bin\mongod.exe --dbpath=C:\Users\DELL\mongodb-data 
async function main() {
    console.log('app');
  /**
   * Connection URI. Update <username>, <password>, and <your-cluster-url> to reflect your cluster.
   * See https://docs.mongodb.com/ecosystem/drivers/node/ for more details
   */
  // const uri = 'mongodb://127.0.0.1:27017'
  const uri='mongodb+srv://AmanJadon:Gemini%4012345@cluster0.ud7w084.mongodb.net/task-manager'
//   const id = new ObjectId()
  //  console.log(id.id+"");
  const client = new MongoClient(uri)
  try {
    await client.connect()
    db = client.db('task-manager')

    // const fetchedData= db.collection('users').findOne({'description':'this is mongodb tutorial'}).then((res)=>{
    // console.log(res);
    // })
    // console.log(fetchedData); // only if you use await then u will get data
    const data=await db.collection('sers').find({'age':25}).toArray()
    for (const key in data) {
        console.log(data[key]);
    }

    // db.collection('userps').updateOne(
    //   { _id: new ObjectId('63f3f29918ec982aef57a9cf') },
    //   { $set: { age: 25 } },
    // )

    // db.collection('users')
    //   .updateMany({ completed: true }, { $set: { completed: false } })
    //   .then((res) => {
    //     console.log(res)
    //   })
    //   .catch((err) => {
    //     console.log(err)
    //   })
    // db.collection('users')
    //   .deleteMany({ completed: false })
    //   .then((res) => {
    //     console.log(res.deletedCount)
    //   })
    //   .catch((err) => {
    //     console.log(err)
    //   })

    // db.collection('users').insertMany([{'description':'this is mongodb tutorial','completed':true},
    // {'description':'this is node js tutorial','completed':false},
    // {'description':'this is react tutorial','completed':false}],(error,res)=>{
    //     if(error){
    //         return console.log('can not add document');
    //     }
    //     console.log(res);
    // })
    // Make the appropriate DB calls
    // console.log('connection established',dclist.namespace);
    // await  listDatabases(client);
    
  } catch (e) {
    console.error(e)
  } finally {
    setTimeout(() => {
      client.close()
    }, 1500)

    // await client.close();
  }
}

main().catch(console.error)

// const connectionUrl='mongodb://127.0.0.1:27017';
