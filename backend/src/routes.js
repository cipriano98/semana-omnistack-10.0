const { Router } = require('express');
const PersonalController = require('./controllers/PersonalController')
const SearchController = require('./controllers/SearchController')

const routes = Router( );

routes.get('/search', PersonalController.index);
routes.get('/personals', PersonalController.index);
routes.post('/personals', PersonalController.store);

module.exports = routes;