import axios from "axios";
import { useQuery } from "react-query";
//import { fetchMovies } from "../query-functions/movieQueryFunction";
const fetchMovies = async () => {
  const response = await axios.get("http://localhost:4000/Tbl_MovieList");
  return response.data;
};
const UseListData = () => {
  return useQuery(["movies"], fetchMovies);
};

export default UseListData;
