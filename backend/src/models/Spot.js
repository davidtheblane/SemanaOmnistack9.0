const mongoose = require("mongoose");

const SpotSchema = new mongoose.Schema({
  thumbnail: String,
  company: String,
  price: Number,
  techs: [String], //pra salvar em array, usar dentro de colchetes
  user: {
    type: mongoose.Schema.Types.ObjectId, //ref ID do usuario como objeto
    ref: "User" //qual model é essa informação
  }
});

module.exports = mongoose.model("Spot", SpotSchema);
