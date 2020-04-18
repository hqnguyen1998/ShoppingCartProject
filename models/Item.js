const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ItemSchema = new Schema({
  name: {
    type: String,
  },
  img: {
    type: String,
  },
  color: {
    type: String,
  },
  price: {
    type: Number,
    default: 0,
  },
  itemLeft: {
    type: Number,
    default: 0,
  },
  quantity: {
    type: Number,
    default: 0,
  },
  collectionId: {
    type: String,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('items', ItemSchema);
