const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // models
    const UserModel = require("../models/User");
    const DoctorModel = require("../models/Doctor");

    // find user OR doctor
    let account =
      (await UserModel.findOne({ email })) ||
      (await DoctorModel.findOne({ email }));

    if (!account)
      return res.status(401).json({ message: "Invalid email or password" });

    // check password
    const isMatch = await account.matchPassword(password);

    if (!isMatch)
      return res.status(401).json({ message: "Invalid email or password" });

    // token
    const token = jwt.sign(
      { id: account._id, role: account.role },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    // success response
    res.status(200).json({
      user: {
        id: account._id,
        username: account.username,
        email: account.email,
        phone: account.phone,
        age: account.age,
        role: account.role,
      },
      token,
    });
  } catch (err) {
    console.error("LOGIN ERROR:", err);
    res.status(500).json({ message: "Server error" });
  }
};
