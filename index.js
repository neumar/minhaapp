const express = require("express")
const app = express()

const port = process.env.PORT || 3000

app.get('/', (req, res)=> {
    return res.send("app is up")
})

app.get('/hello/:nome', (req, res)=>{
    return res.send(" Oi "+req.params.nome)
})

app.listen(port, () => {
    console.log("app na porta " + port)
})

