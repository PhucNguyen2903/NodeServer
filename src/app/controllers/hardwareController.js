const Hardware = require('../models/Hardware');
const { mongooseToObject } = require('../../util/moongoose');

class HardwareController {
    //[GET] /hardware/:slug
    async Show(req, res, next) {
        Hardware.findOne({ slug: req.params.slug }).then(hardware => {
            res.render('hardwares/show', { hardware: mongooseToObject(hardware) });

        }).catch(next);

    }

    //[GET] /hardware/create
    Create(req, res, next) {
        res.render('hardwares/create');
    }

    //[Post] /hardware/store
    async Store(req, res, next) {
        try {
            const formData = req.body;
            const hardware = new Hardware(formData);
            await hardware.save();
            res.redirect('../');
        } catch (error) {
            next(error);
        }
    }

    //[GET] /hardware/:id/edit
    Edit(req, res, next) {
        Hardware.findById(req.params.id).then(hardware => res.render('hardwares/edit', {
            hardware: mongooseToObject(hardware)
        })).catch(next);


    }

    //[PUT] /hardware/:id
    async Update(req, res, next) {
        await Hardware.updateOne({ _id: req.params.id }, req.body).then(() => res.redirect('/me/cart/hardwares')).catch(next);
    }

    //[PATCH] /hardware/:id / restore
    async Restore(req, res, next) {
        await Hardware.restore({ _id: req.params.id }, req.body).then(() => res.redirect('/me/bin/hardwares')).catch(next);
    }

    //[Delete] /hardware/:id
    async Delete(req, res, next) {
        await Hardware.delete({ _id: req.params.id }).then(() => res.redirect('/me/cart/hardwares')).catch(next);
    }

    //[Delete] /hardware/:id/force
    async ForceDelete(req, res, next) {
        await Hardware.deleteOne({ _id: req.params.id }).then(() => res.redirect('/me/bin/hardwares')).catch(next);
    }

    //[Post]/ hardware/ handle-form-actions
   async HandleFormActions(req, res, next) {
        switch (req.body.action) {
            case 'delete':
                await Hardware.delete({ _id: {$in: req.body.cartIds}}).then(() => res.redirect('/me/cart/hardwares')).catch(next);
                break;
            default:
                res.json({message: 'Action invalid'});
                break;
        }
    }

}
module.exports = new HardwareController();