const express = require("express")

const app = express()
const PORT = 3003

app.get('/', (req, res) =>{
    res.send("Hewwo Worwd! owo")
})

app.listen(PORT, () =>{
    console.log(`Listening on port ${PORT}.`)
})