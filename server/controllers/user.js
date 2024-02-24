import  User  from "../models/user.js";

const registerUser = async (req, res, next) => {
  const user = req.body.user;

  if (!user) {
    return res.json({ error: "user not found" });
  }

  let inserted = await User.insertMany([user]);

  if (!inserted) {
    return res.json({ error: "user not created" });
  }

  return res.json({ user: inserted });
};

const getUser = async (req, res, next) => {
  const id = req.body.id || req.query.id;
  // console.log(req.params)
  let user = await User.findOne({ _id: id });

  if (!user) {
    return res.json({ error: "user not found" });
  }

  return res.json({ user: user });
};

const getUsers = async (req, res, next) => {
  let users = await User.find({});

  if (!users) {
    return res.json({ error: "users not found" });
  }

  return res.json({ users: users });
};

const deleteUser = async (req, res, next) => {
  const id = req.body.id || req.params.id;
  let user = await User.deleteOne({ _id: id });

  if (!user) {
    return res.json({ error: "user not deleted" });
  }

  return res.json({ user });
};

const updateUser = async (req, res, next) => {
  const updatedUser = await req.body.updatedUser;
  const id = req.body.id;
  let user = await User.updateOne({ _id: id }, { updatedUser });
  if (!user) {
    return res.json({ error: "can't update user" });
  }

  return res.json({ user });
};

export { getUser, getUsers, deleteUser, registerUser, updateUser };
