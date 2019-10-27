//CRUD -- Create Read Update Delete

// const mongodb= require('mongodb');
// const MongoClient= mongodb.MongoClient;
const { MongoClient , ObjectID} = require('mongodb')

const connectionURL='mongodb://127.0.0.1:27017'
const  databaseName = 'task-manager'
const id = new ObjectID();
// console.log(id.id.length)
// console.log(id.toHexString().length)




MongoClient.connect(connectionURL,{ useNewUrlParser: true},(error,client) =>{
         if(error){
             return console.log('Unable to connect to MongoDB')
         }
         

         const db= client.db(databaseName)


         db.collection('tasks').deleteOne({
                name: 'Leapfrog'



         }).then((result)=>{
             console.log(result)
         }).catch(()=>{
             console.log(error)
         })

    //     db.collection('tasks').updateMany({ 
    //             done: false
    //         },{
    //             $set:{
    //                 done: true
    //             }
    //         }
            

        
    // ).then((result)=>{
    //     console.log(result)
    // }).catch((error)=>{
    //     console.log(error);
        
    // });



    
        
        //  const updatepromise=db.collection('tasks').updateOne({
        //         _id: new ObjectID("5d9c5d2ab7ec531f883beff5")
        //  },{
        //      $inc: {
        //          age: 1
        //      }

        //  })


        //  updatepromise.then((result)=>{
        //      console.log(result)

        //  }).catch((error)=>{
        //     console.log(error)
        //  });
         


        

















        // db.collection('users').findOne({ _id: new ObjectID("5d9c62c9e279501f8888e612")}, (error,user)=>{
        //             if(error){
        //                 return console.log('Unable to find user')
        //             }
        //             console.log(user)

        // })
        
        // db.collection('tasks').find({done: false}).toArray((error,task)=>{
        //     console.log(task)

        // })
        // db.collection('tasks').find({done: false}).count((error,task)=>{
        //     console.log(task)

        // })
        // //  db.collection('tasks').insertMany([
        //      {
        //          name:'GP',
        //          description:'Go to GP at 14:15',
        //          done:false
        //         },{
        //             name:'Haircut',
        //             description:'Go for a haircut at 13:00',
        //             done:false

        //         },{
        //             name:'Leapfrog',
        //          description:'Watch Leapfrog Presentation at 11:30',
        //          done:true

        //         }
         


        //  ], (error,result)=>{
        //      if(error){
        //          return console.log('Ubable to insert task document')
        //      }
               
        //      return console.log(result.ops)

        //  }

        //  )

        //  db.collection('users').insertOne({
        //      name: 'Georgios',
        //      age: 36
        //  }, (error,result)=>{
        //     if(error){
        //         return console.log('Unable to insert user')
        //     }

        //     console.log(result.ops)
        //  })


    //     db.collection('users').insertMany([

    //     {
    //         name:'Aliki',
    //         age:29

    //     },{
    //         name:'Maria',
    //         age:33
    //     }],(error,result)=>{
    //         if(error){
    //             return console.log('Unable to insert documents')
    //         }
    //         console.log(result.ops)
    //     }
         


    // )



   
})



