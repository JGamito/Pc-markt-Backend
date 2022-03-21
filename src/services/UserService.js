const { User } = require("./../models/mongoose");
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

const findById = async (id) => {
  await checker.throwErrorIfDocumentDoesNotExist({ id, model: User });
  return await User.findById(id);
};

const update = async (id, document) => {
  await checker.throwErrorIfDocumentDoesNotExist({ id, model: User });
  return User.findByIdAndUpdate(id, document, { new: true });
};

const remove = async (id) => {
  await checker.throwErrorIfDocumentDoesNotExist({ id, model: User });
  const result = await User.findOneAndDelete(id);
 return result;
}



module.exports = {
  create,
  findById,
  update,
  remove,
};
