import React, { useState } from "react";
import PropTypes from "prop-types";

export const AddCategory = ({ setcategories }) => {
  const [inputValue, setinputValue] = useState("");

  const manageChange = (e) => {
    setinputValue(e.target.value.toUpperCase());
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim().length > 2) {
      setcategories((categories) => {
        return [inputValue.toUpperCase(), ...categories];
      });
      setinputValue("");
    }
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          id="add"
          autoComplete="off"
          placeholder="Buscar GIF..."
          value={inputValue}
          onChange={manageChange}
        />
      </form>
    </>
  );
};

AddCategory.propTypes = {
  setcategories: PropTypes.func.isRequired,
};
