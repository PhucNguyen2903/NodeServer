const newsRouter = require('./news');
const siteRouter = require('./site');
const hardwareRouter = require('./hardwares');
const meRouter = require('./me');

function route(app) {
  app.use('/news', newsRouter);
  app.use('/hardwares', hardwareRouter);
  app.use('/me', meRouter);
  app.use('/', siteRouter);
}

module.exports = route;
