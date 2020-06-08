const mecab = require('mecab-ya');
const bodyParser = require('body-parser');
const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const router = express.Router();

router.post('/api/v1/morpheme-analysis', function (req, res) {
  const text = req.body.text;
  mecab.pos(text, function (err, result) {
    console.log('text:', text, 'nouns:', result);
    res.json({
      tags: result
    });
  });
});

const app = express();

app.use(bodyParser.json());
app.use(router);

app.get('/ping', function(req, res){
  res.json({
    timestamp: new Date(),
    message: 'alive',
    success: true
  })g
});

app.listen(process.env.PORT || 8080);

