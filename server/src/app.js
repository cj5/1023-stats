require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
var corsOptions = {
  origin: 'http://localhost:3000'
}
const db = require('./db')
const Player = db.Player

app.use(cors(corsOptions))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

const getPlayerData = async () => {
  const alex = await Player.findOne({ name: 'Alex' })
  const cj = await Player.findOne({ name: 'CJ__' })
  const john = await Player.findOne({ name: 'John' })
  const playerData = [
    {
      name: alex.name,
      points: alex.points,
    },
    {
      name: cj.name,
      points: cj.points,
    },
    {
      name: john.name,
      points: john.points,
    },
  ]
  console.log(playerData)
  app.get('/', (req, res) => {
    res.send(playerData)
    // res.send('hello from server?')
  })
}
getPlayerData()

const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`)
})
