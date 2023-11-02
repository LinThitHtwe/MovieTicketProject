import axios from "axios";

const fetchMovies = async () => {
  const response = await axios.get("/Tbl_MovieList");
};

module.exports = {
  fetchMovies,
};
