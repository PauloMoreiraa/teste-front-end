import React, { useState } from "react";
import "./modalProduct.scss";

interface ModalProductProps {
  product: {
    nome: string;
    imagem: string;
    preco: number;
    descricao: string;
  };
  onClose: () => void;
}

const ModalProduct: React.FC<ModalProductProps> = ({ product, onClose }) => {
  const [quantity, setQuantity] = useState(1);

  const decrease = () => setQuantity((prev) => Math.max(prev - 1, 1));
  const increase = () => setQuantity((prev) => prev + 1);

  return (
    <div className="modalOverlay">
      <div className="modalContent">
        <button className="closeBtn" onClick={onClose}>
          ×
        </button>

        <div className="modalColumns">
          <div className="leftColumn">
            <img src={product.imagem} alt={product.nome} />
          </div>

          <div className="rightColumn">
            <span className="productName">{product.nome}</span>
            <span className="currentPrice">
              {new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
              }).format(product.preco)}
            </span>
            <p className="description">{product.descricao}</p>

            <button className="detailsBtn">
              Veja mais detalhes do produto &gt;
            </button>

            <div className="purchaseSection">
              <div className="quantityCounter">
                <button onClick={decrease} disabled={quantity <= 1}>
                  −
                </button>
                <span>{quantity.toString().padStart(2, "0")}</span>
                <button onClick={increase}>+</button>
              </div>

              <button className="buyBtn">Comprar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalProduct;
