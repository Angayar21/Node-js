const fs=require("fs")

const requestHandler =(req,res) =>{
    const url =req.url
    const method =req.method
    if(url === "/"){
        res.setHeader("content-type","text/html")
        res.write("<html>")
        res.write("<head><title>Form details</title></head>")
        res.write("<body><form action= /message method=POST ><input type=text name=message><input type=submit value=submit></form></body>")
        res.write("</html>")
        return res.end()
        
    }
    if(url ==="/message" && method =="POST"){

        const body=[]
        req.on("data",(chunk)=>{
            console.log("chunk:");
            body.push(chunk)
            console.log(chunk);

        })
        req.on("end",()=>{
            const parsedBody = Buffer.concat(body).toString()
            const message =parsedBody.split("=")
            fs.writeFileSync("hello.txt",message[1])
            console.log(parsedBody)
        })
        fs.writeFileSync("myfile.txt","this file is created using fs core module")

        res.setHeader("Location","/")
        res.statusCode=302           // redirecting status code.
        return res.end()


    }
    res.setHeader("content-type","text/html")
    res.write("<html>")
    res.write("<head><title>Create server</title></head>")
    res.write("<body><h1>Hello from Node server<h1></body>")
    res.write("</html>")
    res.end()

}

//module.exports =requestHandler     ---->single export
//module.exports= {handler:requestHandler,someText:"Hello.am exported text from another module"}
//----->multi export
exports.handler =requestHandler
exports.someText ="i am exported from a node module"  //----->seperate export
