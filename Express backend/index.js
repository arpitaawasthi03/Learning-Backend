// import express from "express"
const express = require("express");

const app = express();
// console.dir(app);

let port = 8080;

app.listen(port, ()=>{
    console.log(`app is listening on port : ${port}`);
});

// app.use((req,res) => {
//     // console.log(req);
//     console.log("request received");
//     // res.send("this is basic response");
//     // res.send({
//     //     name: "arpii",
//     //     age: 19
//     // });
//     const code = 
//     `<h1>Helloooo World!</h1>
//     <ul>
//     <li>Apple</li>
//     <li>Mango</li>
//     <li>Banana</li>
//     </ul> `
//     res.send(code);
// });

app.get("/",(req,res)=>{
    res.send("This is the root path");
});
app.get("/home",(req,res)=>{
    res.send("This is the home path");
});
// app.get("/search",(req,res)=>{
//     res.send("This is the search path");
// });
// app.get("/about",(req,res)=>{
//     res.send("This is the about path");
// });
app.get("/:username/:id",(req,res)=>{
    // console.log(req.params);
    let {username , id} = req.params;
    // res.send("helloo i m root");
    let HTMLstr = `<h1>Welcome ${username}</h1>`
    res.send(HTMLstr);
})
app.get("/search", (req,res)=>{
    // console.log(req.query);
    // res.send("no res");
    let {q} = req.query;
    res.send(`serach results: ${q}`);
});