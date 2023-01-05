const Song = require("../models/song.model");

const getSongs = async (req, res) => {
  const playlistId = req.query.playlistId;

  if(playlistId) {
    const result = await Song.find({playlistId});
    return res.send(result);
  }
  const result = await Song.find({});
  res.send(result);
};

const getSong = async (req, res) => {
  const result = await Song.findById(req.params.id);
  res.send(result);
};

const createSongs = async (req, res) => {
  const newSong = req.body;
  try {
    const save = await new Song(newSong).save();

    res.send(save);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const removeSongs = async (req, res) => {
  const id = req.params.id;
  const song = await Song.findById(id);
  await Song.deleteOne(song);
  res.send("Success");
};

const updateSongs = async (req, res) => {
  const { id } = req.params;
  const update = await Song.findByIdAndUpdate({ _id: id }, req.body);
  res.send(update);
};

module.exports = {
  getSongs,
  createSongs,
  removeSongs,
  updateSongs,
  getSong,
};
