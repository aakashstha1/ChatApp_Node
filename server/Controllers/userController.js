const userModel = require("../Models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const validator = require("validator");

const createToken = (_id) => {
  const jwtkey = process.env.JWT_KEY;
  return jwt.sign({ _id }, jwtkey, { expiresIn: "3d" });
};

const registerUser = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    // Check if user with the same email already exists
    // let existingUser = await userModel.findOne({ email });
    // if (existingUser)
    //   return res
    //     .status(400)
    //     .json({ error: "User with the given email already exists!" });

    // Validate inputs
    if (!name || !email || !password)
      return res.status(400).json({ error: "All fields are required!" });

    if (!validator.isEmail(email))
      return res.status(400).json({ error: "Invalid email!" });

    if (!validator.isStrongPassword(password))
      return res.status(400).json({
        error:
          "Weak password! Password should be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character.",
      });

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create a new user instance
    const newUser = new userModel({ name, email, password: hashedPassword });

    // Save the user to the database
    await newUser.save();

    // Generate JWT token
    const token = createToken(newUser._id);

    // Return success response with user details and token
    res.status(201).json({
      _id: newUser._id,
      name: newUser.name,
      email: newUser.email,
      token,
    });
  } catch (error) {
    console.error("Error registering user:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = { registerUser };
