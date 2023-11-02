import axios from "axios";
import { useQuery } from "react-query";
//import { fetchMovies } from "../query-functions/movieQueryFunction";
const fetchDatas = async (fetchUrl) => {
  const response = await axios.get(fetchUrl);
  return response.data;
};
const UseListData = (queryKey, fetchUrl) => {
  return useQuery(queryKey, () => fetchDatas(fetchUrl));
};

export default UseListData;
