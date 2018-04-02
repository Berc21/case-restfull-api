const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CampaignSchema = new Schema({
    title: String,
    image: String
});

module.exports = mongoose.model('Campaign', CampaignSchema);