//const http = require("http")
const express =require("express")

const app = express()

app.use("/second",(req,res,next)=>{
    res.send("<h1>second page</h1>")
    return console.log("second middleware")
    
})
app.use("/third",(req,res,next)=>{
    console.log("third middleware")
    res.send("<h1>third page</h1>")
    return res.send({datatype:"json"})
})
app.use("/",(req,res,next)=>{
    console.log("first middleware")
    return res.send("landing page")
    
})
//const server=http.createServer(app)
app.listen(5000)
