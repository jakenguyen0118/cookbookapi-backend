const express = require('express')
const router = express.Router()

const mongoose = require('../db/connection')
const Author = require('../../models/Author')

// Write the route to list all authors
router.get('/', async (req, res) => {
	const allAuthors = await Author.find({})
	res.json({ status: 200, data: allAuthors })
})
// Write the route to get authors by firstname
router.get('/firstName', async (req, res) => {
	const author = await Author.find({ firstName: 'meera' })
	res.json({ status: 200, data: author })
})
// Write the route to create an author:
router.post('/', async (req, res) => {
	const author = await Author.create(req.body)
	res.json({ status: 200, data: author })
})
// Write the route to update an author
router.put('/', async (req, res) => {
	const author = await Author.findOneAndUpdate(
		{ firstName: 'meera' },
		{ firstName: 'jake' }
	)
	res.json({ status: 200, msg: 'item updated', data: author })
})
// Update the cookbook using Postman.
router.put('/cookbook', async (req, res) => {
	const author = await Author.findOneAndUpdate(
		{ firstName: 'meera' }, req.body
	)
	res.json({ status: 200, msg: 'item updated', data: author })
})

router.delete('/:id', async (req, res) => {
	res.json(await Author.findByIdAndRemove(req.params.id))
})

router.put('/:id', async (req, res) => {
	res.json(await Author.findByIdAndUpdate(req.params.id, req.body, { new: true }))
})
// Bonus: Write the route to delete cookbooks by author name. (hint: There are a couple on different ways to do this and you may have to change/add code in other files)


module.exports = router