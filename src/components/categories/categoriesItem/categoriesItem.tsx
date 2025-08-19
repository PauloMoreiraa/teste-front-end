import React from "react";
import "./categoriesItem.scss";

interface CategoriesItemProps {
  name: string;
  icon: string;
  alt: string;
}

const CategoriesItem: React.FC<CategoriesItemProps> = ({ name, icon, alt }) => {
  return (
    <div className="categoryItem">
      <a href="#" className="iconContainer">
        <img src={icon} alt={alt} />
      </a>
      <span className="categoryName">{name}</span>
    </div>
  );
};

export default CategoriesItem;
