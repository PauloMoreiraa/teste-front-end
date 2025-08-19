import React from "react";
import iconSearch from "./../../../assets/icons/MagnifyingGlass.png";
import "./menuSearch.scss";

const MenuSearch: React.FC = () => {
  return (
    <div className="menuSearch">
      <input
        type="text"
        placeholder="O que você está buscando?"
        className="menuSearchInput"
      />
      <img src={iconSearch} alt="search" className="menuSearchIcon" />
    </div>
  );
};

export default MenuSearch;
