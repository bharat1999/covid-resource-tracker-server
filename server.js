const express = require('express');
const app = express();
const port =process.env.PORT || 3001;
const axios = require('axios').default;
require('dotenv').config()
app.get("/",(req,res) =>{res.send("API running")})

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    next();
  });

app.get('/api', (req, res) =>{
    axios.get("https://coronabeds.jantasamvad.org/covid-info.js")
      .then(function(r){
        r=(JSON.parse(r.data.substring(22).slice(0,-1)))
        res.json(r)
      })
      .catch(function(e){
        console.log(e)
      })
    }
)
app.listen(port, () => console.log(`http://localhost:${port}`));