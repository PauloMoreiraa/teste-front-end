import React from "react";
import "./categories.scss";
import iconTech from "./../../assets/icons/tech.png";
import iconMarket from "./../../assets/icons/supermercados 1.png";
import iconDrink from "./../../assets/icons/whiskey.png";
import iconTool from "./../../assets/icons/ferramentas 1.png";
import iconHealth from "./../../assets/icons/cuidados-de-saude 1.png";
import iconSport from "./../../assets/icons/corrida 1.png";
import iconFashion from "./../../assets/icons/moda 1.png";

import CategoriesItem from "./categoriesItem/categoriesItem";

const Categories: React.FC = () => {
  return (
    <div className="categories">
      <CategoriesItem
        name="Tecnologia"
        icon={iconTech}
        alt="Ícone de Tecnologia"
      />
      <CategoriesItem
        name="Supermercado"
        icon={iconMarket}
        alt="Ícone de Supermercado"
      />
      <CategoriesItem name="Bebidas" icon={iconDrink} alt="Ícone de Bebidas" />
      <CategoriesItem
        name="Ferramentas"
        icon={iconTool}
        alt="Ícone de Ferramentas"
      />
      <CategoriesItem name="Saúde" icon={iconHealth} alt="Ícone de Saúde" />
      <CategoriesItem
        name="Esportes e Fitness"
        icon={iconSport}
        alt="Ícone de Esportes e Fitness"
      />
      <CategoriesItem name="Moda" icon={iconFashion} alt="Ícone de Moda" />
    </div>
  );
};

export default Categories;
