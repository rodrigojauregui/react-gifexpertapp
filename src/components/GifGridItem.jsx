import React from "react";

export const GifGridItem = ({ title, url, id }) => {
  return (
    <div>
      <h1> {title} </h1>
      <img src={url} alt={title} width="200" height="300" />
    </div>
  );
};
