// controllers/authController.js
const bcrypt = require("bcryptjs");
const User = require("../models/User");
const {
  userRegisterSchema,
  userLoginSchema,
} = require("../utils/validation/auth");
const { asyncHandler } = require("../utils/AsyncHandler");
const generateToken = require("../middleware/jwt");

// Register user -- Made the changes in this Register Route
const registerUser = asyncHandler(async (req, res) => {
  const validInputs = await userRegisterSchema.validateAsync(req.body);
  const { username, email, password } = validInputs;

  // Check if user exists
  let user = await User.findOne({ email });
  if (user) {
    return res.status(409).json({ message: "User already exists" });
    // throw new ApiError(409, false, "The User Already Exists!!");
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

  const token = await generateToken(user);

  return res.status(200).json({
    success: true,
    message: "Account created. You are now signed in.",
    token,
  });
});

// Login user
const loginUser = asyncHandler(async (req, res) => {
  const validInputs = await userLoginSchema.validateAsync(req.body);
  const { email, password } = validInputs;

  try {
    // Check if user exists
    let user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid Credentials" });
    }

    // Check password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid Credentials" });
    }

    const token = await generateToken(user);

    return res.status(200).json({
      success: true,
      message: "Login successful",
      token,
    });
  } catch (error) {
    if (error.isJoi) {
      const errorMessage = error.details[0].message;
      return res.status(400).json({
        success: false,
        error: errorMessage,
      });
    } else {
      return res.status(500).json({
        success: false,
        error: error.message,
      });
    }
  }
});

// authenticated user
const authenticatedUser = asyncHandler(async (req, res) => {
  try {
    const userId = req.user.id;
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    return res.status(200).json({ user });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = {
  registerUser,
  loginUser,
  authenticatedUser,
};
