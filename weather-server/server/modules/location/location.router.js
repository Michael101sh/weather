/* 
  if there is an error thrown in the DB, asyncMiddleware
  will pass it to next() and express will handle the error */
const raw = require("../../middleware/route.async.wrapper");
const express = require("express");
const marker = require("@ajar/marker");

const router = express.Router();

router.use(express.json());

const locationModel = require("./location.model");

router.post(
  "/",
  raw(async (req, res, next) => {
    const location = await locationModel.find({ key: req.body.key })
      .select(`-_id 
                key`);
    if (Object.keys(location).length === 0) {
      marker.obj(req.body, "create a favorite location, req.body:");
      await locationModel.create(req.body);
      res.send("ok");
    } else {
      res.send("This loaction already added to favorites");
    }
  })
);

// GET ALL FAVORITES LOCATIONS
router.get(
  "/",
  raw(async (req, res) => {
    const favoriteLocations = await locationModel.find({}).select(`-_id 
                                        key 
                                        name`);
    res.status(200).json(favoriteLocations);
  })
);

// GETS A SINGLE FAVORITE LOCATION
router.get(
  "/:id",
  raw(async (req, res) => {
    const favoriteLocation = await locationModel.findById(req.params.id)
      .select(`-_id 
                                        key 
                                        name`);
    if (!favoriteLocation)
      return res.status(404).json({ status: "No favorite city found." });
    res.status(200).json(favoriteLocation);
  })
);

// DELETES A FAVORITE LOCATION
router.delete(
  "/:id",
  raw(async (req, res) => {
    const favoriteLocation = await locationModel.findByIdAndRemove(
      req.params.id
    );
    res.status(200).json(favoriteLocation);
  })
);

// UPDATES A SINGLE FAVORITE LOCATION
router.put(
  "/:id",
  raw(async (req, res) => {
    const favoritelocation = await locationModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        upsert: true
      }
    );
    res.status(200).json(favoritelocation);
  })
);

module.exports = router;

//---------------
