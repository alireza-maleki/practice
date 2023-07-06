import React from "react";
import axios from "axios";
import { useQuery } from "react-query";

import { useGetData } from "../custom-hook/useGetData";

const FetchingQuery = () => {
  // const { data, isLoading, isError, error, refetch } = useQuery(
  //   ["cat"],
  //   async () => {
  //     return await axios
  //       .get("https://catfact.ninja/fact")
  //       .then((res) => res.data);
  //   }
  // );

  const { data, isLoading, isError, error, showAlert } = useGetData();

  if (isLoading)
    return (
      <h1 className="text-center text-3xl text-bold mt-10">Loading ...</h1>
    );
  if (isError)
    return (
      <h1 className="text-center text-3xl text-bold mt-10">
        Sorry, there was error! : Error : {error.message}
      </h1>
    );

  return (
    <div className="text-center">
      <h2 className="text-2xl text-red-500 bg-slate-200 p-4">{data?.fact}</h2>
      <button
        onClick={showAlert}
        className="hover:bg-blue-500 px-8 py-2 bg-blue-800 border rounded text-bold text-2xl "
      >
        Update
      </button>
    </div>
  );
};

export default FetchingQuery;
