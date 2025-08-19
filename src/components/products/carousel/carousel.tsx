import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./carousel.scss";

import iconPrev from "./../../../assets/icons/prev.png";
import iconNext from "./../../../assets/icons/next.png";
import ModalProduct from "./../modalProduct/modalProduct";

export interface Product {
  id: number;
  nome: string;
  descricao: string;
  preco: number;
  imagem: string;
}

interface CarouselProps {
  products: Product[];
  visibleCount?: number;
  autoPlay?: boolean;
  interval?: number;
}

const Carousel: React.FC<CarouselProps> = ({
  products,
  visibleCount = 4,
  autoPlay = true,
  interval = 3500,
}) => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const handleOpenModal = (product: Product) => {
    setSelectedProduct(product);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
  };

  if (!products?.length) return <p>Nenhum produto disponível</p>;

  return (
    <div className="carouselContainer">
      <Swiper
        modules={[Navigation, Autoplay]}
        slidesPerView={visibleCount}
        spaceBetween={20}
        loop={true}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        autoplay={
          autoPlay ? { delay: interval, disableOnInteraction: false } : false
        }
        className="carousel"
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <div className="productCard">
              <img src={product.imagem} alt={product.nome} />
              <div className="productInfos">
                <h3>{product.nome}</h3>
                <span className="oldPrice">
                  {new Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  }).format(product.preco + 500)}
                </span>
                <span className="currentPrice">
                  {new Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  }).format(product.preco)}
                </span>
                <span className="installments">
                  ou 2x de{" "}
                  {new Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  }).format(product.preco / 2)}{" "}
                  sem juros
                </span>
                <span>Frete grátis</span>
                <button
                  className="buyButton"
                  onClick={() => handleOpenModal(product)}
                >
                  Comprar
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <button className="carouselBtn custom-prev">
        <img src={iconPrev} alt="Anterior" />
      </button>
      <button className="carouselBtn custom-next">
        <img src={iconNext} alt="Próximo" />
      </button>

      {selectedProduct && (
        <ModalProduct product={selectedProduct} onClose={handleCloseModal} />
      )}
    </div>
  );
};

export default Carousel;
