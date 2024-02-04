const express = require("express")
const router = express.Router()
const Recipe = require("../models/recipe")

// Get recipes
router.get("/", async (req, res) => {
    let recipes;
    try {
        if (req.query.name) {
            recipes = await Recipe.findOne({ name: req.query.name })
        }
        else {
            recipes = await Recipe.find({})
        }
        res.status(200).json(recipes)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

// Create a new recipe
router.post("/", async (req, res) => {
    try {
        const recipe = await Recipe.create(req.body)
        res.status(201).json(recipe)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

// Update a recipe
router.patch("/", async (req, res) => {
    try {
        const { id } = req.query
        if (!id) {
            return res.status(400).json({ message: 'id is required for update' });
        }
        const recipe = await Recipe.findByIdAndUpdate(id, req.body)
        if (!recipe) {
            res.status(404).json({ message: "Cannot find recipe with the passed id" })
        }
        const updatedRecipe = await Recipe.findById(id)
        res.status(201).json(updatedRecipe)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

// Delete a recipe
router.delete("/", async (req, res) => {
    try {
        const { id } = req.query
        if (!id) {
            return res.status(400).json({ message: 'id is required for update' });
        }
        const recipe = await Recipe.findByIdAndDelete(id, req.body)
        if (!recipe) {
            res.status(404).json({ message: "Cannot find recipe with the passed id" })
        }
        res.status(200).json(recipe)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

module.exports = router