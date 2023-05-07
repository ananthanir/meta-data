const mongoose = require("mongoose");

const MDSchema = new mongoose.Schema({
    nft_id: {
        type: String,
        required: true,
    },
    metadata: {
        type: String,
        required: true,
    },
    time: { type: Date, default: Date.now }
});

const MDModel = mongoose.model("metadata", MDSchema);
module.exports = MDModel;