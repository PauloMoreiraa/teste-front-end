import React from "react";
import "./brandsItem.scss";

interface BrandsItemProps {
  image: string;
  alt?: string;
}

const BrandsItem: React.FC<BrandsItemProps> = ({ image, alt = "Marca" }) => {
  return (
    <div className="brandItem">
      <img src={image} alt={alt} />
    </div>
  );
};

export default BrandsItem;
