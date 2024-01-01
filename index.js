const express= require('express')
const mongoose= require('mongoose');
const bodyParser = require('body-parser');

const router = require('./routes/noteroutes');


const app= express();
app.use(express.json())
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use('/api',router);
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Internal Server Error' });
  });
mongoose.connect("mongodb+srv://aashutosh89660:jZ4pXLFwX78qYzsJ@cluster7.syz7p2l.mongodb.net/").then(()=>{
    app.listen(PORT, ()=>{
        console.log(`server is running ${PORT} `)
    })
}). catch((err)=>{
    console.log(err);
}) 

//jZ4pXLFwX78qYzsJ