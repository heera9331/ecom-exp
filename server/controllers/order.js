import Order from "../models/Order.js";

const addOrder = async (req, res) => {
  const order = req.body.order;

  if (!order) {
    return res.send("Please Provide Required Order Details");
  }

  console.log(order)
  const addedOrder = await Order.create(order);
  if (!addedOrder) {
    res.json({
      status: false,
      msg: "Unable to Create Order",
    });
  } else {
    return res.json({
      status: true,
      createdOrder: addedOrder,
    });
  }
};

const getOrder = async (req, res) => {
  const _id = req.body.id || req.query.id;
  if (!_id) {
    return res.send("Please enter correct id");
  }
  const order = await Order.find({ _id });
  if (!order) {
    return res.send("Order could not find");
  }
  return res.json({ msg: true, order });
};

const allOrders = async (req, res) => {
  const allOrders = await Order.find({});
  return res.json({
    msg: true,
    allOrders,
  });
};

const deleteOrder = async (req, res) => {
  const _id = req.body.id || req.query.id;

  if (!_id) {
    return res.msg("Please enter correct id");
  }

  const isDeleted = await Order.deleteOne({ _id });
  if (!isDeleted) {
    return res.json({ status: false, msg: "Not Deleted" });
  }

  return res.json({ msg: true, isDeleted });
};

const updateOrder = async (req, res) => {
  const _id = req.body.id || req.query.id;
  const updateOrder = req.body.updateOrder;

  if (!_id && !updateOrder) {
    return res.msg("Please enter correct id / updatedOrder");
  }

  const afterUpdate = await Order.findByIdAndUpdate(
    { _id, updateOrder },
    { new: true }
  );

  if (!afterUpdate) {
    return res.json({ status: false, msg: "Order could not update" });
  } else {
    return res.json({ status: true, afterUpdate });
  }
};

export { getOrder, deleteOrder, updateOrder, allOrders, addOrder };
