const axios = require( 'axios' );
const Personal = require('../models/Personal');
const parceStrigAsArray = require('../utils/parseStringAsArray');

module.exports = {

    async index( request, response ) {

        const personals = await Personal.find();

        return response.json(personals);

    },

    async store( request, response ) {

        const { github_username, techs, latitude, longitude } = request.body;
        
        let personal = await Personal.findOne({ github_username });
    
        if (!personal) {

            const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`)
            
            const { name = login, avatar_url, bio } = apiResponse.data;
            
            const techsArray = parceStrigAsArray(techs);
            
            const location = {
                type: 'Point',
                coordinates: [longitude, latitude]
            };
            
            personal = await Personal.create({
                github_username,
                name,
                avatar_url,
                bio,
                techs: techsArray,
                location,
            })

        }
    
        return response.json(personal);
    
    }

};