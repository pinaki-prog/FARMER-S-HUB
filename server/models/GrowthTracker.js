const mongoose = require('mongoose');

const growthTrackerSchema = new mongoose.Schema({
    cropType: {
        type: String,
        required: true,
    },
    plantDate: {
        type: Date,
        required: true,
    },
});

module.exports = mongoose.model('GrowthTracker', growthTrackerSchema);
