const service = require('../services/user.service');

exports.register = async (req, res) => {
  try {
    const id = await service.registerUser(req.body);
    res.json({ message: "User Created", id });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};