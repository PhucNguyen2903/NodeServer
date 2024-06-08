const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete');


const Schema = mongoose.Schema;

const Hardware = new Schema({
  name: { type: String },
  description: { type: String },
  // image: { type: String },
  slug: { type: String, slug: 'name', unique: true }
}, {
  timestamps: true
});


//Plugin
mongoose.plugin(slug);
Hardware.plugin(mongooseDelete, {
  deletedAt: true,
  overrideMethods: 'all'
});

module.exports = mongoose.model('Hardware', Hardware);