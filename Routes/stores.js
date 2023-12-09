import express from "express";
import { getStores, addStore } from "../Controllers/storecontroller.js";

const router = express.Router();

router.route("/").get(getStores).post(addStore);

router.post("/another-route", (req, res) => {
  // router code here
});

export default router;
