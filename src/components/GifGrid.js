import React from "react";
import PropTypes from "prop-types";
import { GifGridItem } from "./GifGridItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({ category }) => {
  let { data, loading } = useFetchGifs(category);

  const htmlToRender = () => {
    if (!loading && data && data.length > 0) {
      return (
        <div className="cardContainer">
          {data?.map((img) => {
            return <GifGridItem key={img.id} {...img} />;
          })}
        </div>
      );
    }
    if (!loading && (!data || data.length === 0)) {
      return (
        <>
          <p className="nombreCategoria animate__animated animate__headShake">
            No se encontraron elementos para la busqueda realizada.
          </p>
        </>
      );
    }
  };
  return (
    <>
      <h3 className="nombreCategoria animate__animated animate__flipInY">
        {category}
      </h3>
      {loading && (
        <p className="nombreCategoria animate__animated animate__flash">
          Cargando...
        </p>
      )}
      {htmlToRender()}
    </>
  );
};

GifGrid.propTypes = {
  category: PropTypes.string.isRequired,
};
