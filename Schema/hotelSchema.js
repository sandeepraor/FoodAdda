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
      name: { type: String, required: true },
      dishimage: { type: String, required: true },
      region: { type: String, required: true }, //chinese,southIndian...
      variant: { type: String, required: true }, //starters,maincourse....
      price: { type: Number, required: true },
      isready: { type: Boolean, required: true },
    },
  ],
  hotelimage: {
    type: [String],
    required: true,
    unique: true,
  },
});

const Hotel = mongoose.Schema('hotel', hotelSchema);

export default Hotel;
