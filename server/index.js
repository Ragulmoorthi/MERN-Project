const express=require("express")
const cors=require("cors")
const bodyparser=require("body-parser")
const database=require("mysql")

const attach=express()
attach.use(cors())
attach.use(bodyparser.json())
attach.use(express.static("public"))
attach.use(bodyparser.urlencoded({extended:true}))

let databaseconnection=database.createConnection({
    host:"localhost",
    port:3306,
    user:"root",
    password:"ragul8754",
    database:"node"
})
databaseconnection.connect(function(error){
    if(error){
        console.log(error)
    }
    else{
        console.log(" data is connect")
    }
})
// Creating CRUD Methoud
attach.post('/register',(request,response)=>{
    let{name,email,number,passWord}=request.body
    let sql= 'insert into store(name,email,phone_number,username,password)values(?,?,?,?,?)'
    databaseconnection.query(sql,[name,email,number,email,passWord],(error,result)=>{
        if (error){
            response.send({"status":"error"})
            console.log(error)
            
        }
        else{
            response.send({"status":"success"})
        }
    })
})
// login page
attach.post('/servicespage',(request,response)=>{
    let{username,password}=request.body
    let sql='select * from store where username=?'
    databaseconnection.query(sql,[username],(error,result)=>{
if(error){
    response.send({"status":"empty_set"})
}
else if (result.length>0){
    let dbusername=result[0].username
    let dbpassword=result[0].password
    let dbid=result[0].id
    if(dbusername==username && dbpassword==password){
        response.send({"status":"success",id:dbid})
    }
    else{
        response.send({"status":"invalid user"})
    }
}
else{
    response.send({"status":"Both_are_invalid"})
}
})
    
}
)
// Geting single data
attach.get('/onedata/:id',(request,response)=>{
    let {id}=request.params
    let sql='select * from store where id=?'
    databaseconnection.query(sql,[id],(error,result)=>{
        if(error){
            response.send(error)
        }
        else{
            response.send(result)
        }
    })
})


attach.get('/getdata',(request,response)=>{
    let sql='select * from store'
    databaseconnection.query(sql,(error,result)=>{
      if(error){
        response.send(error)
        console.log(error)
      }
      else{
        response.send(result)
      }
    })
  })
// Update method
attach.put('/update/:id',(request,response)=>{
    let {id}=request.params
    let{name,phonenumber,pass}=request.body
    let sql='update store set name=?,phone_number=?, password=? where id=? '
    
    databaseconnection.query(sql,[name,phonenumber,pass,id],(error,result)=>{
        if(error){
            response.send({"status":"error"})
        }
        else{
            response.send({"status":"updated"})
        }
    })
})
// delete
attach.post('/delete/:id',(request,response)=>{
    let id=request.body.id
    let sql='delete from store where id=?'
    databaseconnection.query(sql,[id],(error,result)=>{
      if(error){
        response.send({"status":"error"})
      }
      else {
        response.send({"status":"success"})
      }
    })
    })
// port
attach.listen(4005,()=>{
    console.log("server on port 4005")
})