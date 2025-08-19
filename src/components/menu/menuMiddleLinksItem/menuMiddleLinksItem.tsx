import React from "react";
import "./menuMiddleLinksItem.scss";

interface MenuMiddleLinksItemProps {
  icon: string;
  alt: string;
}

const MenuMiddleLinksItem: React.FC<MenuMiddleLinksItemProps> = ({
  icon,
  alt,
}) => {
  return (
    <div className="menuMiddleLinksItem">
      <a href="#">
        <img src={icon} alt={alt} className="menuMiddleLinksItemIcon" />
      </a>
    </div>
  );
};

export default MenuMiddleLinksItem;
