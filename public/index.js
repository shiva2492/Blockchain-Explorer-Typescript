const express = require('express')
const app = express()
const fetch = require('node-fetch');
const port = 3001

// Serve the react build application
app.use(express.static(__dirname + '/react-ui/build'));

// Request the blocks from blockchain.info and returns the result
app.get('/blocks', (req, res) => {
  fetch('https://blockchain.info/blocks?format=json', {
      method: 'get',
    })
    .then(apiRes => apiRes.json())
    .then(json => res.send(json))
});

// Request the block details from blockchain.info and return the values
// size, block_index and previous_hash in json format
app.get('/blockDetails/:hash', (req,res) => {
  let hash = req.params.hash;
  fetch('https://blockchain.info/rawblock/'+hash, {
      method: 'get',
    })
    .then(apiRes => apiRes.json())
    .then(json => {
      let jsonAns = `{
        "size": "${json.size}",
        "block_index": "${json.block_index}",
        "previous_hash": "${json.prev_block}"
      } `;
      res.send(jsonAns)
    })
})

app.listen(process.env.PORT || port, () => console.log(`Example app listening on port ${port}!`))
