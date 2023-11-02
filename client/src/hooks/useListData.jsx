import axios from "axios";
import { useQuery } from "react-query";
//import { fetchMovies } from "../query-functions/movieQueryFunction";
const fetchMovies = async (fetchUrl) => {
  const response = await axios.get(fetchUrl);
  return response.data;
};
const UseListData = (queryKey, fetchUrl) => {
  return useQuery(queryKey, () => fetchMovies(fetchUrl));
};

export default UseListData;
