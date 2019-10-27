const express= require('express');
const app= express()
require('./db/mongoose')
const User=require('./models/user')
const Task=require('./models/task')
const userRouter=require('./routers/user')
const taskRouter=require('./routers/task')

const port = process.env.PORT || 3000

app.use((req,res,next)=>{
    console.log(req.method,req.path,req.params)
    next()
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

