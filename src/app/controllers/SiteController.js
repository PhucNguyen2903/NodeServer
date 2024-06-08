const Hardware = require('../models/Hardware');
const { multipleMoongooseToObject } = require('../../util/moongoose');

class SiteController {
  //[GET] /home
  async index(req, res, next) {
    Hardware.find({}).then(hardware => {
      res.render('home', {  hardware: multipleMoongooseToObject(hardware) })
      
    }).catch(next);
  }

  //[GET] /search
  search(req, res) {
    res.render('search');
  }
}

module.exports = new SiteController();
