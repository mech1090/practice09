const express = require('express')
const cors = require('cors')

const app = express()

app.use(express())
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static('public'))

app.get('/',(req,res)=>{
    res.send('OOK')
})

app.get('*',(req,res)=>{
    res.send('BAD_REQUEST')
})

port = 3300

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})