const path = require('path')
const express = require('express')

const app = express()
const port = 3000

app.use(express.static(path.join(__dirname, '../dist')))

app.get('/*', (_, res) =>
  res.sendFile(path.join(__dirname, '../dist', 'index.html')),
)

app.listen(port, () => console.log(`App listening on port ${port}`))
