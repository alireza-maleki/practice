import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useQuery } from "react-query";
import axios from "axios";
import { getAllProducts } from "../redux/store";

const GetData = () => {
  const dispatch = useDispatch();
  const allData = useSelector((state) => state.product);

  //   const { data, isLoading, isError } = useQuery(["pro"], async () => {
  //     const productItems = await axios.get("https://catfact.ninja/fact");
  //     dispatch(getData(productItems));
  //   });

  useEffect(() => {
    dispatch(getAllProducts());
  }, []);
  console.log(allData.products);

  return (
    <div>
      <button></button>
    </div>
  );
};

export default GetData;
