const express=require("express")
const cors=require("cors")
const mysql=require("mysql")

const app=express()

app.use(cors())

const port=9000

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root', // Change this to your MySQL user
    password: 'M1racle@123', // Change this to your MySQL password
    database: 'sys' // Change this to your MySQL database name
  });

db.connect(err=>{
    if(err)
        console.error("Error fetching the data from this database")

    else{
        console.log("Connected to the database")
    }
})

app.get('/get',(req,res)=>{
    const query="select * from goalUrls";

    db.query(query,(err,results)=>
    {
        if(err){
            console.error("Error fetching the data from the database",err)
            res.status(500).json({error:'Failed to fetch the data'})
            return
        }
        res.json(results)

    })
})
app.listen(port ,()=>{
    console.log('server running')
})