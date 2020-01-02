const mongoose = require('mongoose');

const urlSchema = new mongoose.Schema({
    urlCode: String,
    longUrl: String,
    shortUrl: String,
    redirectCount: Number,
    date: { type:Date, default: Date.now }
});

module.exports = mongoose.model('Url', urlSchema);
module.exports.urlSchema = urlSchema;