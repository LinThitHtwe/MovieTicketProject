import axios from "axios";
import { useQuery } from "react-query";

const fetchData = async (fetchUrl) => {
  const response = await axios.get(fetchUrl);
  return response.data;
};
const UseFetchData = (queryKey, fetchUrl) => {
  return useQuery(queryKey, () => fetchData(fetchUrl));
};

export default UseFetchData;
