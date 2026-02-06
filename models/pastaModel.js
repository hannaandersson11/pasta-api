var mongoose = require("mongoose");

var PastaSchema = new mongoose.Schema(
	{
		name: String,
		pastaType: String,
		origin: String,
		ingredients: [String],
	},
	{
		collection: "pastas",
	},
);

module.exports = mongoose.model("pastaModel", PastaSchema);
