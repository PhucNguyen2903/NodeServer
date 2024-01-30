const Hardware = require('../models/Hardware');
const { mongooseToObject } = require('../../util/moongoose');

class HardwareController {
    //[GET] /hardware/:slug
    async Show(req, res, next) {
        Hardware.findOne({ slug: req.params.slug }).then(hardware => {
            res.render('hardwares/show',{hardware : mongooseToObject(hardware)});

        }).catch(next);

    }

     //[GET] /hardware/create
      Create(req, res, next) {
        res.render('hardwares/create');
    }

      //[Post] /hardware/store
     async Store(req, res, next) {
        const formData = req.body;
        const hardware = new Hardware(formData);
        await hardware.save().then(hardware => {res.redirect('../');});
    }
   
      //[GET] /hardware/:id/edit
      Edit(req, res, next) {
        Hardware.findById(req.params.id).then(hardware => res.render('hardwares/edit',{
            hardware: mongooseToObject(hardware)
        }) ).catch(next);
        
        
    }
}
module.exports = new HardwareController();