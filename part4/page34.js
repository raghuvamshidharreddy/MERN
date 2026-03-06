import express from "express";
const app=express();
app.set("view engine",'ejs')
app.set("views","./views")
app.listen(8080,()=>console.log("Server Started"));

const users=[
    {
        name:"Revanth Reddy",
        email:"randarevanth@gmail.com",
        password:"password123"
    },
    {
        name:"Praveen Nair",
        email:"praveennair@gamil.com",
        password:"praveenIsHandsome"

    },
    {
        name:"Alice Johnson",
        email:"alicejohnson@gmail.com",
        password:"aliceIsCool"
    }
];
app.get("/login",(req,res)=>
    {
    res.render("login");
});
app.get("/register",(req,res)=>
    {
    res.render("register");
});
app.get("/",(req,res)=>
    {
    res.render("dashboard",{users});
});