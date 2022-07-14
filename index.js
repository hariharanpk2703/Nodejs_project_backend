const express = require('express')
const detailsxRouter1 = require('./Routes/detailsx')
// const detailsxRouter2 = require('./route/bolywood')
const cors = require("cors")
const app = express()

app.use(cors())
// app.use('/',function(req,res){
//      res.send('function is running')
//  })
app.use("/api",detailsxRouter1)
// app.use("/api",detailsxRouter2)

app.listen(process.env.PORT||8000,()=>{
    console.log("app is running");
})