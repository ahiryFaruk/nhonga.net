import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
    res.json({ message: "Seja bem vindo a API da nhonga.net" });
});

export default router;
