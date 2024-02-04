const mongoose = require("mongoose");

const recipe = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        category: {
            type: String,
            required: true,
        },
        items: {
            type: Array,
            required: false,
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("Recipe", recipe);
