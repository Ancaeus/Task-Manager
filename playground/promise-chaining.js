require('../src/db/mongoose')
const User=require('../src/models/user')

//5da3034678db8249b8f22e53

// User.findByIdAndUpdate('5da26c99acbb81539c28667d', { age: 1}).then((user)=>{
//     console.log(user)
//     User.countDocuments({age :1 }).then((usercount)=>{
//             console.log(usercount)
//     }).catch((e)=>{
//         console.log(e)
//     })
// })

const updateAgeAndCount = async (id,age) =>{
    const user = await User.findByIdAndUpdate(id, {age})
    const count= await User.countDocuments({age})
    return  count

}

updateAgeAndCount('5da26c99acbb81539c28667d',2).then((count)=>{
    console.log(count)
}).catch((e)=>{
    console.log(e)
})