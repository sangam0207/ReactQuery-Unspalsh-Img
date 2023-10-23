import React from "react";
import { UseProvider } from "./Context";
import { useState } from "react";
const SearchForm = () => {
  const [item, setItem] = useState("");
  const { searchItem, setSearchItem } = UseProvider();
  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchItem(item);
  };
  return (
    <section>
      <h1 className="title"> Unsplash Images</h1>
      <form className="search-form">
        <input
          type="text"
          className="form-input search-input"
          name="search"
          value={item}
          placeholder="cat"
          onChange={(e) => setItem(e.target.value)}
        />
        <button type="submit" className="btn" onClick={handleSubmit}>
          {" "}
          Search
        </button>
      </form>
    </section>
  );
};

export default SearchForm;
