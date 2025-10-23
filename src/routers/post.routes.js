const { Router } = require("express");
const postController = require("../controllers/post.controller");

const postRouter = Router();

postRouter.get("/", postController.GET_ALL_POSTS);
postRouter.post("/create", postController.CREATE_POST);
postRouter.put("/update/:id", postController.UPDATE_POST);
postRouter.delete("/delete/:id", postController.DELETE_POST);
postRouter.get("/:id", postController.GET_POST)

module.exports = postRouter;