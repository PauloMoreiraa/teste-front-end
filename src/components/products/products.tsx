import React from "react";
import Carousel from "./carousel/carousel";
import { useProducts } from "./../../hooks/useProducts";
import "./products.scss";
import TableNav from "./tableNav/tableNav";

interface ProductsProps {
  title: string;
  subtitle?: string;
  options?: string[];
}

const Products: React.FC<ProductsProps> = ({ title, subtitle, options }) => {
  const { products, loading, error } = useProducts(
    "/api/teste-front-end/junior/tecnologia/lista-produtos/produtos.json"
  );

  if (loading) return <div>Carregando...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="productsSection">
      <div className="titleContainer">
        <div className="line"></div>
        <span className="sectionTitle">{title}</span>
      </div>

      {options ? (
        <TableNav options={options} />
      ) : (
        subtitle && <p className="sectionSubtitle">{subtitle}</p>
      )}

      <Carousel products={products} />
    </div>
  );
};

export default Products;
