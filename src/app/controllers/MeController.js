const Hardware = require('../models/Hardware');
const { multipleMoongooseToObject } = require('../../util/moongoose');

class MeController {
    //[GET] /me/bin/hardwares
    async BinHardwares(req, res, next) {
      Hardware.findWithDeleted({}).then(hardware => {
        res.render('me/bin-hardwares', {  hardware: multipleMoongooseToObject(hardware) })
      }).catch(next);
  }
     //[GET] /me/cart/hardwares
      async CartHardwares(req, res, next) {
        Hardware.find({}).then(hardware => {
          res.render('me/cart-hardwares', {  hardware: multipleMoongooseToObject(hardware) })
        }).catch(next);
    }

   
}
module.exports = new MeController();