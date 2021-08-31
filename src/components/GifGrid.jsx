
import React from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { LoaderComp } from "./LoaderComp";
import { GifGridItem } from "./GifGridItem";

export const GifGrid = ({ category }) => {

  const { data, loading } = useFetchGifs(category);

  return (
    <div>
      <h3> {category} </h3>
      {loading && <LoaderComp/> }

      {data.map((img) => (
        <GifGridItem {...img} key={img.id} />
      ))}
    </div>
  );
};

