module.exports = {
  notes: async (user, args, { modules }) => {
    return await modules.Note.find({ author: user._id }).sort({ _id: -1});
  },
  favorites: async (user, args, { modules }) => {
    return await modules.Note.find({ favoritedBy: user._id }).sort({ _id: -1});
  }
};