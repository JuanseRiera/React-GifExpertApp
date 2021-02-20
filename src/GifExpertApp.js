import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

const GifExpertApp = ({ defaultCategories }) => {
  const [categories, setcategories] = useState(defaultCategories);

  return (
    <>
      <div className="header">
        <h2>GifExpertApp</h2>
        <div>
          <AddCategory setcategories={setcategories} />
        </div>
      </div>

      <hr />

      {categories?.map((category) => {
        return <GifGrid key={category} category={category} />;
      })}
    </>
  );
};

export default GifExpertApp;
