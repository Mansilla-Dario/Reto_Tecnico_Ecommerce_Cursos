import { Router } from "express";
import { getAuthors,createAuthor, updateAuthor, deleteAuthor, getAuthor } from "../controllers/authors.controller.js";



const router = Router();


router.get("/api/authors",getAuthors);
router.post("/api/authors",createAuthor);

router.get("/api/authors/:id",getAuthor);

router.put("/api/authors/:id",updateAuthor);
router.delete("/api/authors/:id",deleteAuthor);

export default router;