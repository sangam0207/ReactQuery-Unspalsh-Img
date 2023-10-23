import React from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { UseProvider } from "./Context";
const url =
  "https://api.unsplash.com/search/photos?client_id=Mr_otXIVLYz-kfwmkiPmymrsxqJPfF67G1KXN6HYCRk&query";
const Gallery = () => {
  const { searchItem } = UseProvider();
  const response = useQuery({
    queryKey: ["images", searchItem],
    queryFn: async () => {
      const result = await axios.get(`${url}=${searchItem}`);
      console.log(result.data);
      return result.data;
    },
  });
  if (response.isLoading) {
    return (
      <section className="image-container">
        <h4>Loading...</h4>
      </section>
    );
  }
  if (response.isError) {
    return (
      <section className="image-container">
        <h4>There was an Error</h4>
      </section>
    );
  }
  const results = response.data.results;
  if (results.length < 1) {
    return (
      <section className="image-container">
        <h4>No Results Found....</h4>
      </section>
    );
  }

  return (
    <section className="image-container">
      {results.map((item) => {
        const url = item?.urls?.regular;
        return (
          <img
            key={item.id}
            src={url}
            alt={item.alt_description}
            className="img"
          />
        );
      })}
    </section>
  );
};

export default Gallery;
