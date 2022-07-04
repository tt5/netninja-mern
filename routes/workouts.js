const express = require('express')

const router = express.Router()

router.get('/', (req, res) => {
  res.json({msg: 'GET all workouts'})
})

router.get('/:id', (req, res) => {
  res.json({msg: 'GET single workouts'})
})

router.post('/', (req, res) => {
  res.json({msg: 'POST a new workout'})
})

router.delete('/', (req, res) => {
  res.json({msg: 'DELETE a new workout'})
})

router.patch('/', (req, res) => {
  res.json({msg: 'UPDATE a new workout'})
})

module.exports = router
