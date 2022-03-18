const { User } = requiere("./../models/mongoose");
const checker = require("./../services/errors");

const create = async (document) => {
  const { email } = document;
  if (await User.exists({ email })) {
    await checker.throwErrorIfUserExists({ email });
  }
  const user = new User(document);
  await user.save();
  return user;
};

module.exports = {
  create,
};
