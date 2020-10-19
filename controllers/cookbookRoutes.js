const express = require('express')
const router = express.Router()

// Require the Cookbook controller.
const mongoose = require('../db/connection')
const Cookbook = require('../../models/Cookbook')

// Write the route to list all cookbooks
router.get('/', async (req, res) => {
	const allCookbooks = await Cookbook.find({})
	res.json({ status: 200, data: allCookbooks })
})
// Write the route to get cookbook by title
router.get('/title', async (req, res) => {
	const cookbook = await Cookbook.find({title: "made in india"})
	res.json({ status: 200, data: cookbook })
})
// Write the route to get cookbook by year published
router.get('/year', async (req, res) => {
	const cookbook = await Cookbook.find({yearPublished: 2014})
	res.json({ status: 200, data: cookbook })
})
// Write the route to create a cookbook
router.post('/', async (req, res) => {
	const cookbook = await Cookbook.create(req.body)
	res.json({ status: 200, data: cookbook })
})
// Write the route to update a cookbook
router.put('/', async (req, res) => {
	const cookbook = await Cookbook.findOneAndUpdate({title: "made in india"}, {yearPublished: 2020})
	res.json({ status: 200, msg: 'item updated', data: cookbook })
})
// Write the route to delete the cookbook by title
router.delete('/', async (req, res) => {
	const cookbook = await Cookbook.findOneAndDelete(
		{ title: 'made in india' }
	)
	res.json({ status: 200, msg: 'item deleted', data: cookbook })
})

module.exports = router;