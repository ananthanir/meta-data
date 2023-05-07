const mongoose = require("mongoose");
const MDModel = require("./MDMode");
const MetaDataSet = require("./MetaDataSet");

async function init() {
    let client = await mongoose.connect("mongodb+srv://ananthan:ananthan@cluster0.apq2bmf.mongodb.net/NFTMetaData?retryWrites=true&w=majority");
    MetaDataSet.forEach(async (data, index) => {
        const newWinner = await new MDModel({ nft_id: index, metadata: JSON.stringify(data) });
        await newWinner.save();
    });

}

init();