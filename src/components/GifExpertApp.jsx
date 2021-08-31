import React, { useState } from "react";
import { AddCategory } from "./AddCategory";
import { GifGrid } from "./GifGrid";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState("");

  // const handleAdd = () => {
  //   setCategories([...categories,('Hunter')])
  //   // setCategories( cats => [...cats, 'Hunter'] );
  // }

  return (
    <div className="p-10">
      <div className="fixed bg-white w-full">
        <h2>GifExpertApp</h2>

        <AddCategory setCategories={setCategories} />
        <hr />
      </div>

      <div className="mt-20" >{<GifGrid category={categories} />}</div>
    </div>
  );
};
