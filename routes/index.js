var express = require('express');
var request = require('request');
var router = express.Router();
router.get('/', function(req, res, next) {
  request.post({url:'http://localhost:8000/poetry/poetry/getRandomPoetry', form: {"name" : "john"}},
    function (err, httpResponse, body) {
        if (err) {
          res.render('error');
          return console.error('upload failed:', err);
        }else{
        	data = JSON.parse(body)
          console.error('upload success:', data)
          console.error('upload success return_message:', data.return_message)
          res.render('index', 
            {
              data : data.data
            }
          );
        }
        
    }
  );
});
module.exports = router;

