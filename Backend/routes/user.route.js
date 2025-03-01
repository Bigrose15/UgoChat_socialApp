import { Router } from "express";

const router = Router();

router.post("/signup", (req, res) => {
  res.send("signed up successfully");
});

export default router;
