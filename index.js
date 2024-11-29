var express = require('express');
var app = express();


var cors = require('cors');
app.use(cors({optionsSuccessStatus: 200})); 

app.use(express.static('public'));

app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});



app.get('/api',(req,res)=>{
  const dateNow  = new Date(); 
  return res.json({
    unix: date.getTime(),
    utc:date.toUTCString()
  })
})
app.get('/api/:date',(req,res)=>{
  const datePara = (isNaN(req.params.date))? req.params.date:parseInt(req.params.date);
  const date = new Date(datePara)
  if (!datePara){
    date = new Date() 
    console.log('empty')
  }
  if (isNaN(date.getTime())){
    return res.json({ error : "Invalid Date" })
  }
  return res.json({
    unix:date.getTime(),
    utc:date.toUTCString()
  })
})


// Listen on port set in environment variable or default to 3000
var listener = app.listen(process.env.PORT || 3000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
