import User from "../models/user.js";

const userExist = async (req, res, next) => {
  const email = req.body.user.email;
  //   console.log(email);
  if (!email) {
    return res.json({ error: "user not found" });
  }

  const ifExist = await User.findOne({ email });
//   console.log("if not exist : -", ifExist);
  if (!ifExist) {
    next()
  } else {
    res.send("User Already Exist");
  }
};

export { userExist };
