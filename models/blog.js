const mongoose = require("mongoose");
const { default: slugify } = require("slugify");

const blogSchema = new mongoose.Schema({
    title: {
        desc: "Title of a blog.",
        trim: true,
        type: String,
        required: true
    },
    body: {
        desc: "Description of a blog.",
        trim: true,
        type: String,
        required: true
    },
    userId: {
        desc: "Id of a user who create a blog.",
        required: true,
        type: Number,
        default: 3
    },
    slug: {
        desc: "Preety url created from blog title.",
        type: String,
        required: true,
        unique: true
    }
})

blogSchema.pre("validate", function(next) {
    if(this.title) {
        this.slug = slugify(this.title, {
            lower: true,
            strict: true
        })
    }

    next();
})

module.exports = mongoose.model("Blog", blogSchema);