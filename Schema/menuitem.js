import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const menuItemSchema = Schema({
  name: {
    type: String,
    required: true,
  },
  dishimage: {
    type: String,
    required: true,
  },
  hotel: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'hotel',
  },
  region: {
    type: String,
    required: true,
  }, //chinese,southIndian...
  variant: {
    type: String,
    required: true,
  }, //starters,maincourse,breakfast....
  price: {
    type: Number,
    required: true,
  },
  isready: {
    type: Boolean,
    required: true,
  },
});

const MenuItem = mongoose.model('menuitem', menuItemSchema);
export default MenuItem;
