import bodyParser from "body-parser"
import express from "express"
import path from 'path'; import { fileURLToPath } from 'url';
import db from "./database.js"

const __filename = fileURLToPath(import.meta.url); 
const __dirname = path.dirname(__filename);

const PORT = process.env.X_ZOHO_CATALYST_LISTEN_PORT||9000

const app=express()
app.use(express.json())

app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended:true}))

app.get("/",(req,res)=>{
    res.render(path.join(__dirname,'view','index.ejs'))
})

app.get("/login",(req,res)=>{
    res.render(path.join(__dirname,'view','index.ejs'))
})

app.post('/login',async(req,res)=>{
    const uemail=req.body.ur_email
    const upass=req.body.ur_pass

    try{
        let ele=await db.query("SELECT * FROM register")
        ele=ele.rows
        let access=false;
        ele.forEach(p=>{
            if(uemail===p.email && upass===p.pass){
                res.render(path.join(__dirname,'view','loginsuces.ejs'),{
                    username:p.us_name
                })
                access=true;
                
            }
            else if(uemail===p.email && upass!=p.pass){
                res.render(path.join(__dirname,'view','index.ejs'),{
                    errormsg:'incorrect password'
                })
                access=true;
            }
            
        })
        if(!access){
            res.render(path.join(__dirname,'view','index.ejs'),{
                errormsg:'Email id not found'
            })
        }
        
        
        
    }catch(err){
        console.log(err)
    }
    
})

app.get('/newRegister',(req,res)=>{
    res.render(path.join(__dirname,'register','register.ejs'))
})
app.get('/forgotpassword',(req,res)=>{
    res.render(path.join(__dirname,'forgotpass','forgotpass.ejs'))
})
app.post('/resetpass',async(req,res)=>{
    const newmail=req.body['ur_email']
    const newpass=req.body['ur_pass']
    try{
        let eel=await db.query('SELECT * FROM register')
        eel=eel.rows
        let finded=eel.find(p=>newmail===p.email);
        finded=finded.id
        await db.query("UPDATE register SET pass=$1 WHERE id=$2",[newpass,finded])
        res.render(path.join(__dirname,'view','index.ejs'))
    }catch(err){
        res.render(path.join(__dirname,'forgotpass','forgotpass.ejs'),{
            value:'Invalid email'
        })
    }
})

app.post('/registeruser',async(req,res)=>{
    const user=0;
    const username=req.body['u_Username']
    const name=req.body['u_name']
    const email=req.body['ur_email']
    const pass=req.body['ur_pass']
    try{
        let element=await db.query("SELECT * FROM  register ")
        element=element.rows;
        let value=false;
        element.forEach(p=>{
            if(p.email==email){
                value=true;
                res.render(path.join(__dirname,'register','register.ejs'),{
                    errormessage:"email already exits try login"
                })
            }
        })

        if(!value){
            await db.query("INSERT INTO register (us_name,per_name,email,pass) VALUES($1,$2,$3,$4)",[
                username,name,email,pass
            ])
            res.render(path.join(__dirname,'register','registration_success','regsucess.ejs'))
        }
        
    }catch(err){
        console.log(err)
    }

   

})

app.listen(PORT,()=>{
    console.log("port is running")
    
})