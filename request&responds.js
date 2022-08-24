
//setup the port for requesting
const express = require('express')
const app = express()
// app.use((req, res) =>{
//     console.log('WE GOT A NEW REQUEST')
//     res.send('<h1>This is my header</h1>')
// })

app.get('/', (req, res)=>{
   res.send('This is home page')
})

app.post('/cats',(req, res)=>{
    res.send('MEOOOWW X2')
} )
app.get('/cats',(req, res) => {
    res.send('MEOWW')
})
app.get('/dogs',(req, res) => {
    res.send('WOOF')
})

app.get('*',(req,res)=>{
    res.send(`I dont know this route`)
}
)

app.listen(8080,() =>{
    console.log('LIstening on PORT 8080');
}) 
