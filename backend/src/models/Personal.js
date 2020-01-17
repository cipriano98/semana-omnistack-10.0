const mongoose = require( 'mongoose' );
const PointSchema = require('./utils/PointSchema');

const PersonalSchema = new mongoose.Schema({
    name: String,
    github_username: String,
    bio: String,
    avatar_url: String,
    techs: [String],
    lacation: {
        type: PointSchema,
        indexes: '2dsphere'
    }
});

module.exports = mongoose.model( 'Personal', PersonalSchema );