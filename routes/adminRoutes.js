const express = require ("express");
const adminController = require("../controllers/adminController");
const router = express.Router();
const adminRoutes = require ("../controllers/adminController");


router.all("/*", (req, res, next)=> {
    req.app.locals.layout = "admin"

    next();
});

router.route ("/")
    .get(adminController.index)

router.route ("/posts")
    .get(adminController.getPosts)


router.route ("/posts/create")
    .get(adminController.createPosts)
    .post(adminController.submitPosts);

router.route ("/posts/edit")
    .get(adminController.editPosts);

module.exports = router;