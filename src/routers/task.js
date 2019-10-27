const express=require('express')
const router=new express.Router()
const Task = require('../models/task')



router.get('/tasks', async (req,res)=>{
    try{
    const task = await Task.find({})
    res.send(task)
    }
  catch(e){
    res.status(500).send(e)
    }
})

router.get('/tasks/:id',async (req,res)=>{
    const _id=req.params.id
    try{
    const task= await Task.findById(_id)
        if(!task){
            return res.status(404).send()
        }
        res.send(task)
    } catch(e) {
        res.status(500).send(e)
    }
})


router.post('/tasks',async (req,res)=>{
    try{
    const task= await new Task(req.body)
        task.save()
        res.status(201).send(task)
    } catch(e){
        res.status(400)
        res.send(e)
    }
})
router.patch('/tasks/:id', async (req,res)=>{
    const updateFields=Object.keys(req.body)
    const allowedUpdates=['description','done']
    const isValidParam =updateFields.every((update)=>allowedUpdates.includes(update))
    
    if(!isValidParam){
        res.status(404).send({error: 'Not allowed Field to Update!'})
    }
    try{
    //const task=await Task.findByIdAndUpdate(req.params.id, req.body,{runValidators:true, new:true})
    const task=await Task.findById(req.params.id)
    if(!task){
        return res.status(404).send()
    }
    updateFields.forEach((update)=>task[update]=req.body[update])
    await task.save()
    
    
        res.send(task)
    }catch(e){
        res.status(400).send(e)

    }

})
router.delete('/tasks/:id' , async(req,res)=>{
    
    try{
    const task = await Task.findByIdAndDelete(req.params.id)
    if (!task){
        res.status(404).send()
    }
    res.send(task)
    }catch(e){
        res.status(400).send(e)
    }


})

module.exports=router