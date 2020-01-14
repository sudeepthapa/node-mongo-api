const express = require("express");

const router = express.Router();

router.get("/", (req, res, next) => {
  res.status(200).json({ message: "Handling Orders get request" });
});

router.post("/", (req, res, next) => {
  res.status(201).json({ message: "Handling orders post request " });
});

router.get("/:orderId", (req, res, next) => {
  res.status(200).json({
    message: "Handling orders post request ",
    id: req.params.orderId
  });
});

router.patch("/:orderId", (req, res, next) => {
  res.status(201).json({
    message: "Patch Request ",
    id: req.params.orderId
  });
});

router.delete("/:orderId", (req, res, next) => {
  res.status(200).json({
    message: "Delete Request ",
    id: req.params.orderId
  });
});

module.exports = router;
