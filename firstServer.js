
const httpNew = require("http")
const req =require("./routes")
console.log(req.someText)
console.log("checking with nodemon package auto run")

const myServer =httpNew.createServer(req.handler)
myServer.listen(3500)