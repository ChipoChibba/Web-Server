//using the HTTp 

const http = require('http');
const fs = require('fs');

// fs.writeFile('register.html',
// `
// <div>
// <h1>This is the Register Page</h1>
// <p1>Please provide details</p1>
// </div>

// `,(err)=>{
//     if(err){
//        console.log(err); 
//     }
//     else{
//         console.log("File has been created")
//     }
// })

//create server
const server = http.createServer((request,response)=>{
    console.log('Someone has visted the server')
    //http header
    // response.writeHead(200,{"Content-Type":"text/html"});

    // //send the response header
    // response.write("Hello, this is my first server")
    // //send data to the uset
    // response.end();
    // //end the response
});

//console.log(server);

//listen
//port, 
server.listen(9000,()=>{
})

//listen to event
server.on('request',(req,res)=>{
    const url = req.url;
    if(url === '/login'){
        //read content on the login page
        fs.readFile('login.html',(err,data)=>{
            if(err) console.log(err);
            //write the user its okay and the type od dat 
            else{
                res.writeHead(200,{"Content-Type":"text/html"});
                res.write(data);
                res.end();
            }
        })
    }
    //home page
    else if(url === '/home'){
        fs.readFile('home.html',(err,data)=>{
            if(err) console.log(err);
            else{
                res.writeHead(200,{"Content-Type":"text/html"});
                res.write(data);
                res.end();
            }
        })
    }
    //register page
    else if(url === '/register'){
        fs.readFile('register.html',(err,data)=>{
            if(err) console.log(err);
            else{
                res.writeHead(200,{"Content-Type":"Text/html"});
                res.write(data);
                res.end();
            }
        })
    }
    // '/' this is equivalent to https//local
})

