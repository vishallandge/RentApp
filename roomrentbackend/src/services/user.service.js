const repo = require('../repositories/user.repository');
const bcrypt = require('bcrypt');

exports.registerUser = async (data) => {
  const hash = await bcrypt.hash(data.password, 10);
  return repo.createUser({ ...data, password: hash });
};