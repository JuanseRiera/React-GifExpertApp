import React, { useState } from "react";
import { AddCategory } from "./AddCategory";
import { GifGrid } from "./GifGrid";

const GifExpertApp = () => {
  const [categories, setcategories] = useState(["SHERLOCK"]);

  return (
    <>
      <div className="header">
        <h2>GifExpertApp</h2>
        <div>
          <AddCategory setcategories={setcategories} />
        </div>
      </div>

      <hr />

      {categories.map((category) => {
        return <GifGrid key={category} category={category} />;
      })}
    </>
  );
};

export default GifExpertApp;
