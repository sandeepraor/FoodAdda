import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import Hotel from '../Schema/hotelSchema.js';
import MenuItem from '../Schema/menuitem.js';
const router = express.Router();

router.get(
  '/',
  expressAsyncHandler(async (req, res) => {
    const hotels = await Hotel.find();
    res.json(hotels);
  })
);
router.post(
  '/register',
  expressAsyncHandler(async (req, res) => {
    const phones = [];
    const images = [];
    const { name, owner, address, getImage, getPhone } = req.body;
    getImage.split(',').map(img => {
      images.push(img.trim());
    });
    getPhone.split(',').map(phone => {
      if (
        !(phone.trim().length === 10) ||
        !phone[0] === 7 ||
        !phone[0] === 8 ||
        !phone[0] === 9
      )
        res.status(401).json({
          message: 'Invalid Phone number',
        });
      else {
        phones.push(phone.trim());
      }
    });
    const HotelDetails = {
      name: name,
      owner: owner,
      address: address,
      phone: phones,
      hotelimage: images,
    };
    const newHotel = new Hotel(HotelDetails);
    await newHotel.save();
    res.json(newHotel);
  })
);

router.post(
  '/menu/:id',
  expressAsyncHandler(async (req, res) => {
    const hotel = await Hotel.findById(req.params.id);
    const { name, dishimage, region, variant, price, isready } = req.body;
    const newItem = {};
    if (name) newItem.name = name;
    if (dishimage) newItem.dishimage = dishimage;
    newItem.hotel = req.params.id;
    if (region) newItem.region = region;
    if (variant) newItem.variant = variant;
    if (price) newItem.price = Number(price);
    if (isready) newItem.isready = Boolean(isready);

    const menuItem = new MenuItem(newItem);

    await menuItem.save();
    hotel.menu.push(menuItem._id);
    await hotel.save();
    res.json(menuItem);
  })
);

//GET request : Fetch all the dishes available in database(menu)
router.get(
  '/menu',
  expressAsyncHandler(async (req, res) => {
    const menuItems = await MenuItem.find();
    res.json(menuItems);
  })
);

//GET request : get all dishes available in hotel
router.get(
  '/menu/:id',
  expressAsyncHandler(async (req, res) => {
    const menu = await MenuItem.find({ hotel: req.params.id });
    if (menu[0]) res.json(menu);
    else res.status(400).json({ message: 'No dishes Available' });
  })
);

//GET request : get all dishes by variant ie. Breakfast,lunch.
router.get(
  '/menu/:variant',
  expressAsyncHandler(async (req, res) => {
    const menuByCategory = await MenuItem.find({
      variant: req.params.variant,
    });
    if (menuByCategory) res.json(menuByCategory);
    else
      res.status(400).json({ message: 'Cannot find items of this category' });
  })
);

export default router;
