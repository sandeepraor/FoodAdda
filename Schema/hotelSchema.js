import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const hotelSchema = Schema({
  name: {
    type: String,
    required: true,
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'user',
  },
  address: {
    type: String,
    required: true,
  },
  phone: {
    type: [String],
    required: true,
    unique: true,
  },
  menu: [
    {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'menuitem',
    },
  ],
  hotelimage: {
    type: [String],
    required: true,
    unique: true,
  },
});

const Hotel = mongoose.model('hotel', hotelSchema);

export default Hotel;
