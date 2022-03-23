const router = require("express").Router();
const { checkErrors } = require("../services/errors");
const UserService = require("../services/UserService");

router.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await UserService.findById(id);
    res.json(user);
  } catch (err) {
    next(err);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const document = req.body;
    await UserService.create({ ...document });
    res.status(201).json();
  } catch (err) {
    next(err);
  }
});

router.put("/:id", async (req, res, next) => {
  try {
    const document = req.body;
    const { id } = req.params;
    const user = await UserService.update(id, document);
    res.json(user);
  } catch (err) {
    next(err);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const deleted = await UserService.remove(id);
    res.json(deleted);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
