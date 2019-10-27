require('../src/db/mongoose')
const Task=require('../src/models/task')


// Task.findByIdAndDelete('5da1dbb7a71df635f04d0061').then((task)=>{
//     console.log(task)
//    return Task.countDocuments({done: false}).then((undoneTasks)=>{
//         console.log(undoneTasks)
//     }).catch((e)=>{
//         console.log(e)
//     })
// })


const deleteTaskAndCount=async(id,done)=>{
   const task= await Task.findByIdAndDelete(id)
   const count = await Task.countDocuments({done})
   return count
}


deleteTaskAndCount('5da20b189c28304158e7b22e',false).then((count)=>{
    console.log(count)

}).catch((e)=>{
    console.log(e)
})