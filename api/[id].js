const mongoose = require("mongoose");
const MDModel = require("../MDMode");

module.exports = async (req, res) => {
    const { id } = req.query;
    const [nid] = req.query.id.split('.');
    await mongoose.connect("mongodb+srv://ananthan:ananthan@cluster0.apq2bmf.mongodb.net/NFTMetaData?retryWrites=true&w=majority");
    MDModel.find({nft_id: nid}).then((data) => {
        res.json(JSON.parse(data[0].metadata));
    })
}

// const MetaDataSet = require("../MetaDataSet");

// module.exports = async (req, res) => {
//     const { id } = req.query;
//     // console.log(MetaDataSet[id]);
//     res.json(JSON.parse(JSON.stringify(MetaDataSet[id])))
// }
