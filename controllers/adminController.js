const Post = require ("../models/postModel").Post;

module.exports = {
    index : (req, res) =>{
        res.render ("admin/index")
    },
 
    getPosts :(req,res) =>{
        Post.find().then(posts => {
            res.render("admin/posts/index", {post: posts});
        });
    },
    
    submitPosts : (req,res) =>{
        // TODO : FORM DATA VALIDATION IS PENDING
    
        const newPost = new Post({
            title : req.body.title,
            description : req.body.description,
            status : req.body.status
        });
        newPost.save().then(post => {
            console.log(post);
            req.flash ("success-message", "Post successfuly created")
            res.redirect("admin/posts");
        })
    },

    createPosts : (req,res) => {
        res.render ("admin/posts/create");
        
    },
    
    editPosts : (req,res) => {
        const id = req.params.id;
        post.findById (id).then(post =>{
            res.render("admin/posts/edit", {post:post})
        })
    }
};
