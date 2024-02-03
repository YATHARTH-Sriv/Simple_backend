import express from 'express'

const app=express()

app.get("/api/jokes",(req,res)=>{
    const jokes=[
       {id :1,
        title: "joke no.1",
        content: "1st joke",},
       {id :2,
        title: "joke no.2",
        content: "2nd joke",},
       {id :3,
        title: "joke no.3",
        content: "3rd joke",},
    ]
    res.send(jokes)
})

const port= 4000

app.listen(port,()=>{
    console.log(`server is working on port ${port}`);
})