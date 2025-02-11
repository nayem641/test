const express = require('express');
const app = express();
require('dotenv').config()
const morgan =require('morgan');
const port =process.env.PORT ||

app.use(morgan('combined'))
  app.get('/', (req, res) => {
    res.send('Hello, World!');
});
app.get('/api/', (req, res) => {
    res.sendFile( __dirname + '/inde.html' );   
        
    
})
 
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});