const express= require('express');
const app= express()
require('./db/mongoose')
const User=require('./models/user')
const Task=require('./models/task')
const userRouter=require('./routers/user')
const taskRouter=require('./routers/task')
const config= require('./../config/server.json')
const port = process.env.PORT || 3000

const maintenanceMode=config.maintenanceMode
// app.use((req,res,next)=>{
//     if(req.method==='GET'){
//         res.send('No GET requests are allowed')
//     }else {
//         next()
//     }

// })

app.use((req,res,next)=>{
 if(maintenanceMode==true){
     res.status(503).send('The website is on maintenance mode!')
 }else{
     next()
 }
})


app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

const jwt = require('jsonwebtoken')





    

app.listen(port, () =>{

    console.log('Listening on port :', port)

})

const myFucntion= async()=>{
    const token = jwt.sign({_id:'abc123'},'thisismynewcourse',{expiresIn:'7 days'})
    console.log(token)

}
myFucntion()


