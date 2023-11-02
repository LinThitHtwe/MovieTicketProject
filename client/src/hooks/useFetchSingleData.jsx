import React from "react";
import { useQuery } from "react-query";

const UseFetchSingleData = (queryKey) => {
  return useQuery(queryKey);
};

export default UseFetchSingleData;
