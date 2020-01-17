const Personal = require("../models/Personal");
const parseStringAsArray = require("../utils/parseStringAsArray");

module.exports = {
  async index(request, response) {
    const { latitude, longitude, techs } = request.query;

    const techsArray = parseStringAsArray(techs);

    const personals = await Personal.find({
      techs: {
        $in: techsArray, //@audit add ignore case
      },
      location: {
          $near: {
              $geometry: {
                    type: 'Point',
                    coordinates: [longitude,latitude],
              },
              $maxDistance: 10000,
          },
      },
    });

    return response.json({ personals });
  }
};
