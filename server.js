const path = require('path')

const express = require('express')

const app = express()

app.use(express.static('dist'))

app.get('*', (req, res) => {
    return res.sendFile(path.join('dist', 'index.html'))
})

const port = process.env.PORT || 4000

app.listen(port, () => console.log(`http://localhost:${port}`))