const mongoose = require('mongoose');

const songNamesSchema = new mongoose.Schema({
songName : { type:  String, description: "Required Field", required: true },
});

module.exports = mongoose.model('songNames', songNamesSchema);