import React from "react";
import "./banner.scss";

const Banner: React.FC = () => {
  return (
    <section>
      <div className="banner">
        <div className="gradient">
          <div className="text">
            <h1>Venha conhecer nossas promoções</h1>
            <h2>
              <span>50% Off</span> nos produtos
            </h2>
          </div>
          <div className="button">
            <a href="#">Ver produto</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
