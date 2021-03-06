const users = require('../../app/controllers/users.server.controller');
const articles = require('../../app/controllers/articles.server.controller');
const profile = require('../../app/controllers/profile.server.controller');
const core = require('../../app/controllers/core.server.controller');


module.exports = function (app) {
    app.route('/api/articles')
        .get(articles.list)
        .post(users.requiresLogin, articles.create);

    app.route('/api/articles/:articleId')
        .get(articles.read)
        .put(users.requiresLogin, articles.hasAuthorization, articles.update)
        .delete(users.requiresLogin, articles.hasAuthorization, articles.delete);

    app.route('/api/articles/uploadPics').post(articles.uploadArticlePicture);


    app.param('articleId', articles.articleByID);


    //profile
    app.route('/api/profile/getByUserId').get(profile.getByUserId);


    //core

    app.route('/api/core/getTopNotificationByUserId/:cnt').get(core.getTopNotificationByUserId);
    app.route('/api/core/isNewNotification/:NotificationId').put(core.updateIsNewNotification);
    app.route('/api/core/sendMail').get(core.sendMail);

    app.route('/api/notification/:notificationId').get(core.getNotificationById);


};