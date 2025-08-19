import React from "react";

import iconProfile from "./../../../assets/icons/UserCircle.png";
import iconCart from "./../../../assets/icons/ShoppingCart.png";
import iconBox from "./../../../assets/icons/Group.png";
import iconHeart from "./../../../assets/icons/Heart.png";
import MenuMiddleLinksItem from "../menuMiddleLinksItem/menuMiddleLinksItem";
import "./menuMiddleLinks.scss";

const MenuMiddleLinks: React.FC = () => {
  return (
    <div className="menuMiddleLinks">
      <MenuMiddleLinksItem icon={iconBox} alt="Ícone de caixa" />
      <MenuMiddleLinksItem icon={iconHeart} alt="Ícone de coração" />
      <MenuMiddleLinksItem icon={iconProfile} alt="Ícore de perfil" />
      <MenuMiddleLinksItem icon={iconCart} alt="Ícone de carrinho de mercado" />
    </div>
  );
};

export default MenuMiddleLinks;
