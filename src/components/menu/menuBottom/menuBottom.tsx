import React from "react";
import "./menuBottom.scss";
import iconSubscription from "./../../../assets/icons/CrownSimple.png";
import MenuBottomItem from "../menuBottomItem/menuBottomItem";

const MenuBottom: React.FC = () => {
  return (
    <nav className="menuBottom">
      <ul>
        <MenuBottomItem
          label="todas categorias"
          alt="todas categorias"
          href="#"
        />
        <MenuBottomItem label="supermercado" alt="supermercado" href="#" />
        <MenuBottomItem label="livros" alt="livros" href="#" />
        <MenuBottomItem label="moda" alt="moda" href="#" />
        <MenuBottomItem label="lançamentos" alt="lançamentos" href="#" />
        <MenuBottomItem
          label="ofertas do dia"
          alt="ofertas do dia"
          href="#"
          highlight
        />
        <MenuBottomItem
          label="assinatura"
          alt="assinatura"
          href="#"
          icon={iconSubscription}
        />
      </ul>
    </nav>
  );
};

export default MenuBottom;
