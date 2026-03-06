import express from "express";
const app=express();

// middleware to parse incoming form data and JSON bodies
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set("view engine",'ejs')
app.set("views","./views")
app.listen(8080,()=>console.log("Server Started"));

let users=[
    {
        name:"Revanth Reddy",
        email:"revanth@gmail.com",
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
app.post("/login",(req,res)=>
{
    const {email,password}=req.body; //here we are getting "email,password" form the body 
    const user=users.find(user=>user.email === email)
    if (user){
        if (user.password===password){
            res.redirect("/");
        }
        else{
            res.render('login',{error:"Invalid Password"});
        }
    }
    else{
        res.render('login',{error: "User Not Found"});
    }
});
app.get("/register",(req,res)=>
    {
    res.render("register");
});
app.get("/",(req,res)=>
    {
    res.render("dashboard",{users});
});
app.post('/register',(req,res)=>{
    const {username,email,password}=req.body;
    const user=users.find(user=>user.email===email)
    if (user){
        res.render('register',{error:"User alread Exist"});
    }
    else{
        users=[...users,{name:username,email,password}]
        res.redirect('/');
    }
});