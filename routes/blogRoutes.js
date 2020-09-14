const express = require("express");
const {
    allBlogs,
    blogDetail,
    insertBlog,
    updateBlog,
    deleteBlog
} = require("../controllers/blog");
const router = express.Router();

// calls without param
router.route("/")
    .get(allBlogs)
    .post(insertBlog)

// calls with id as a param
router.route("/:id")
    .get(blogDetail)
    .put(updateBlog)
    .delete(deleteBlog)

module.exports = router;