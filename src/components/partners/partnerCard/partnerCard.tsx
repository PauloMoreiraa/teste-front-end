import React from "react";
import "./partnerCard.scss";

interface PartnerCardProps {
  background?: string;
  name?: string;
  description?: string;
  buttonLink?: string;
}

const PartnerCard: React.FC<PartnerCardProps> = ({
  background,
  name = "Parceiro",
  description = "Descrição do parceiro",
  buttonLink = "#",
}) => {
  return (
    <div
      className="partnerCard"
      style={{ backgroundImage: background ? `url(${background})` : undefined }}
    >
      <div className="gradient">
        <span className="partnerName">{name}</span>
        <p className="partnerDescription">{description}</p>
        <a className="partnerBtn" href={buttonLink}>
          Confira
        </a>
      </div>
    </div>
  );
};

export default PartnerCard;
