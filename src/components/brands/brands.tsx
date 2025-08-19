import React from "react";
import BrandsItem from "./brandsItem/brandsItem";
import "./brands.scss";

import brand from "./../../assets/icons/Logo.png";

const Brands: React.FC = () => {
  return (
    <div className="brandsContainer">
      <span className="brandTitle">Navegue por marcas</span>
      <div className="brands">
        <BrandsItem image={brand} />
        <BrandsItem image={brand} />
        <BrandsItem image={brand} />
        <BrandsItem image={brand} />
        <BrandsItem image={brand} />
      </div>
    </div>
  );
};

export default Brands;
