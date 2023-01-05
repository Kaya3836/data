const Playlist = require("../models/playlist.model");

exports.createPlaylist = async (req, res) => {
  const body = req.body;
  try {
    const result = await new Playlist(body).save();
    res.send(result);
  } catch (error) {
    console.log(error);
  }
};

exports.getPlaylists = async (req, res) => {
  const result = await Playlist.find({});
  res.send(result);
};

exports.getPlaylist = async (req, res) => {
  const result = await Playlist.findById(req.params.id).populate("songs");
  res.send(result);
};

exports.deletePlaylist = async (req, res) => {
  const { id } = req.params;
  const playlist = await Playlist.findByIdAndRemove({ _id: id });
  res.send(playlist);
};

exports.updatePlaylis = async (req, res) => {
  const { id } = req.params;
  const playlist = await Playlist.findByIdAndUpdate({ _id: id }, req.body);
  res.send(playlist);
};

exports.addToPlaylist = async (req, res) => {
  const playlistId = req.params.id;
  const songId = req.body.id;
  const playlist = await Playlist.findByIdAndUpdate(playlistId);

  playlist.songs.push(songId);

  await playlist.save();

  res.send(playlist);
};
