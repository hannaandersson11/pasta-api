var express = require("express");
var router = express.Router();

var mongoose = require("mongoose");
var pastaModel = require("../models/pastaModel.js");

// ----- GET -----
// req och res här är request- respektive response-objekten
router.get("/", function (req, res, next) {
	// filter
	const filter = {};
	if (req.query.name) {
		filter.name = req.query.name;
	}
	if (req.query.pastaType) {
		filter.pastaType = req.query.pastaType;
	}
	if (req.query.origin) {
		filter.origin = req.query.origin;
	}
	if (req.query.ingredient) {
		filter.ingredients = req.query.ingredient;
	}

	// find är Mongoose funktion
	pastaModel.find(filter).then(function (pastas) {
		res.json(pastas);
	});
});

// ----- GET by ID -----
router.get("/:id", function (req, res, next) {
	pastaModel.findById(req.params.id).then(function (pasta) {
		res.json(pasta);
	});
});

// ----- POST -----
router.post("/", function (req, res, next) {
	// req.body är innehållet i requestobjektet
	pastaModel.create(req.body).then(function (post) {
		res.json(post);
	});
});

// ----- DELETE -----
router.delete("/:id", function (req, res, next) {
	pastaModel.findByIdAndDelete(req.params.id, req.body).then(function (post) {
		res.json(post);
	});
});

// ----- CHANGE -----
router.put("/:id", function (req, res, next) {
	pastaModel.findByIdAndUpdate(req.params.id, req.body, {new: true}).then(function (post) {
		res.json(post);
	});
});

module.exports = router;
