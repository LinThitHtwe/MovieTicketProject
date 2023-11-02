import axios from "axios";
import { useQuery } from "react-query";

const fetchSingleData = async (fetchUrl) => {
  const response = await axios.get(fetchUrl);
  return response.data;
};

const UseFetchSingleData = (queryKey, fetchUrl) => {
  return useQuery(queryKey, () => fetchSingleData(fetchUrl));
};

export default UseFetchSingleData;
