const GrowthTracker = require('../models/GrowthTracker');

exports.trackGrowth = async (req, res) => {
    const { cropType, plantDate } = req.body;
    try {
        const newTrack = new GrowthTracker({ cropType, plantDate });
        await newTrack.save();
        res.status(201).json(newTrack);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.getGrowthTracks = async (req, res) => {
    try {
        const tracks = await GrowthTracker.find();
        res.status(200).json(tracks);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
