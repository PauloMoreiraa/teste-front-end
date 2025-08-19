import React from "react";
import iconShield from "./../../../assets/icons/ShieldCheck.png";
import iconTruck from "./../../../assets/icons/Truck.png";
import iconCard from "./../../../assets/icons/CreditCard.png";
import MenuTopItem from "../menuTopItem/menuTopItem";
import "./menuTop.scss";

const MenuTop: React.FC = () => {
  return (
    <div className="menuTop">
      <div className="items">
        <MenuTopItem icon={iconShield} alt="Ícone de escudo de segurança">
          Compra <span className="highlight">100% segura</span>
        </MenuTopItem>

        <MenuTopItem icon={iconTruck} alt="Ícone de caminhão de frete">
          <span className="highlight">Frete grátis</span> acima de R$ 200
        </MenuTopItem>

        <MenuTopItem icon={iconCard} alt="Ícone de cartão">
          <span className="highlight">Parcele</span> suas compras
        </MenuTopItem>
      </div>
    </div>
  );
};

export default MenuTop;
