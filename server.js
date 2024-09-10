// const express = require("express");
// const app = express();
// const port = 3000;
// const path = require("path");
// const { v4: uuidv4 } = require("uuid");
// const methodOverride = require("method-override");

// // express set up
// app.use(express.urlencoded({ extended: true }));
// app.use(methodOverride("_method"));
// // view engine set up
// app.set("view engine", "ejs");
// app.set("views", path.join(__dirname, "views"));

// // router

// app.get("/", (req, res) => {
//   res.send("Vishal bhai Good morning");
// });

// //arrye and router
// let posts = [
//   {
//     id: uuidv4(),
//     username: "vishal ",
//     content: "Prajpati",
//   },
//   {
//     id: uuidv4(),
//     username: "Rahul ",
//     content: "Prajpati",
//   },
//   {
//     id: uuidv4(),
//     username: "Om ",
//     content: "Prajpati",
//   },
// ];
// app.get("/posts", (req, res) => {
//   res.render("index", { posts });
// });

// // //  new post set up
// app.get("/posts/new", (req, res) => {
//   res.render("new");
// });

// app.post("/posts", (req, res) => {
//   let id = uuidv4();
//   let { username, content } = req.body;
//   posts.push({ id, username, content });
//   res.redirect("/posts");
// });
// // //   post show a
// app.get("/posts/:id", (req, res) => {
//   let { id } = req.params;
//   let post = posts.find((p) => id === p.id);
//   res.render("show", { post });
// });
// // //   post show a
// app.get("/posts/:id/edit", (req, res) => {
//   let { id } = req.params;
//   let post = posts.find((p) => id === p.id);
//   res.render("edit", { post });
// });

// app.patch("/posts/:id", (req, res) => {
//   let { id } = req.params;
//   let newContent = req.body.content;
//   post = posts.find((p) => id === p.id);
//   post.content = newContent;
//   res.redirect("/posts");
// });


// // delete 

// app.delete("/posts/:id",(req,res)=> {
//     let { id } = req.params;
//     posts = posts.filter((p) => p.id !== id);
//     res.redirect("/posts");

// });

// app.listen(port, () => {
//  ( `server is rining on ${port}`);
// });


// const express = require("express");
// const app = express();
// const port = 3000;
// const path = require("path");
// const { v4: uuidv4 } = require("uuid");
// const methodOverride = require("method-override");
// const { Pool } = require("pg");

// // express set up
// app.use(express.urlencoded({ extended: true }));
// app.use(methodOverride("_method"));

// // view engine set up
// app.set("view engine", "ejs");
// app.set("views", path.join(__dirname, "views"));

// // PostgreSQL database setup
// const pool = new Pool({
//   user: 'postgres',
//   host: 'localhost',
//   database: 'Tiket',
//   password: 'vishal4012',
//   port: 5432,
// });

// // Sample posts data (initial data; will be replaced with database content)

// // Home route
// app.get("/", (req, res) => {  
//   res.send("Hello Vishal Bhai");
// });

// // Posts index route
// app.get("/posts", async (req, res) => {
//   const result = await pool.query("select * from posts");
//   res.render("index", { posts: result.rows });
// });

// // New post form route
// app.get("/posts/new", (req, res) => {
//   res.render("new");
// });

// // Create post route
// app.post("/posts", async (req, res) => {
//   const { username, content } = req.body;
//   let id = uuidv4();
//   await pool.query("insert into posts (id, username, content) values ($1, $2, $3)", [id, username, content]);
//   res.redirect("/posts");
// });

// // Post detail route
// app.get("/posts/:id", async (req, res) => {
//   const { id } = req.params;
//   const result = await pool.query("select * from posts where id = $1", [id]);
//   const post = result.rows[0];
//   res.render("show", { post });
// });

// // Edit post form route
// app.get("/posts/:id/edit", async (req, res) => {
//   const { id } = req.params;
//   const result = await pool.query("select * from posts where id = $1", [id]);
//   const post = result.rows[0];
//   res.render("edit", { post });
// });

// // Update post route
// app.patch("/posts/:id", async (req, res) => {
//   const { id } = req.params;
//   const { content } = req.body;
//   await pool.query("update posts set content = $1 where id = $2", [content, id]);
//   res.redirect("/posts");
// });

// // Delete post route
// app.delete("/posts/:id", async (req, res) => {
//   const { id } = req.params;
//   await pool.query("delete from posts where id = $1", [id]);
//   res.redirect("/posts");
// });

// // Start the server
// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });


// // mongo db
// const express = require("express");
// const app = express();
// const port = 3000;
// const path = require("path");
// const { v4: uuidv4 } = require("uuid");
// const methodOverride = require("method-override");
// const mongoose = require("mongoose");

// // express set up
// app.use(express.urlencoded({ extended: true }));
// app.use(methodOverride("_method"));

// // view engine set up
// app.set("view engine", "ejs");
// app.set("views", path.join(__dirname, "views"));

// // MongoDB setup
// mongoose.connect('mongodb://localhost:27017/Ticket', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// const postSchema = new mongoose.Schema({
//   id: { type: String, default: uuidv4 },
//   username: String,
//   content: String,
// });

// const Post = mongoose.model('Post', postSchema);

// // Home route
// app.get("/", (req, res) => {  
//   res.send("Hello Vishal Bhai");
// });

// // Posts index route
// app.get("/posts", async (req, res) => {
//   const posts = await Post.find({});
//   res.render("index", { posts });
// });

// // New post form route
// app.get("/posts/new", (req, res) => {
//   res.render("new");
// });

// // Create post route
// app.post("/posts", async (req, res) => {
//   const { username, content } = req.body;
//   const newPost = new Post({ username, content });
//   await newPost.save();
//   res.redirect("/posts");
// });

// // Post detail route
// app.get("/posts/:id", async (req, res) => {
//   const { id } = req.params;
//   const post = await Post.findOne({ id });
//   res.render("show", { post });
// });

// // Edit post form route
// app.get("/posts/:id/edit", async (req, res) => {
//   const { id } = req.params;
//   const post = await Post.findOne({ id });
//   res.render("edit", { post });
// });

// // Update post route
// app.patch("/posts/:id", async (req, res) => {
//   const { id } = req.params;
//   const { content } = req.body;
//   await Post.findOneAndUpdate({ id }, { content });
//   res.redirect("/posts");
// });

// // Delete post route
// app.delete("/posts/:id", async (req, res) => {
//   const { id } = req.params;
//   await Post.findOneAndDelete({ id });
//   res.redirect("/posts");
// });

// // Start the server
// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });
