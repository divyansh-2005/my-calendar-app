// controllers/authController.js
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const { userRegisterSchema, userLoginSchema } = require('../utils/validation/auth');
const {asyncHandler} = require( '../utils/AsyncHandler');
const  { ApiError } =  require('../utils/ApiError');


// Register user -- Made the changes in this Register Route 
const registerUser = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body;
  const { error } = userRegisterSchema.validate(req.body);
  if (error) {
    //return res.status(400).json({ message: error.details[0].message });
    throw new ApiError(400,error.details[0].message);
  }
  
  // Check if user exists
  let user = await User.findOne({ email });
  if (user) {
      //return res.status(400).json({ message: 'User already exists' });
      throw new ApiError(409,"The User Already Exists !!");
  }
  user = new User({
    username,
    email,
    password,
  });

  // Encrypt password
  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(password, salt);

  await user.save();

  // Create JWT
  const payload = {
    user: {
      id: user.id,
    },
  };

  jwt.sign(
    payload,
    process.env.JWT_SECRET,
    { expiresIn: 3600 },
    (err, token) => {
      if (err) throw err;
      res.json({ token });
    }
  );

});

// Login user
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  // validation
  const { error } = userLoginSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }

  try {
    // Check if user exists
    let user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'Invalid Credentials' });
    }

    // Check password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid Credentials' });
    }

    // Create JWT
    const payload = {
      user: {
        id: user.id,
      },
    };

    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: 3600 },
      (err, token) => {
        if (err) throw err;
        res.json({ token });
      }
    );
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// authenticated user
const authenticatedUser = asyncHandler(async (req, res) => {
  try {
		const userId = req.user.id;
		const user = await User.findById(userId);
		if (!user) {
			return res.status(404).json({message: "User not found" });
		}
		return res.status(200).json({ user });
	} catch (error) {
		return res.status(500).json({ message: "Internal server error" });
	}
});

module.exports = {
  registerUser,
  loginUser,
  authenticatedUser
};
