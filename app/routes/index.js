module.exports = function routes(app) {

    var indexController = require('../controllers/indexController');

    app.route('/users')
        .get(indexController.list)
        .nested('/:id')
            .get(indexController.getId);

}