import React from "react";
import "./partners.scss";
import PartnerCard from "./partnerCard/partnerCard";

import partnerImg1 from "./../../assets/images/image45.png";

const Partners: React.FC = () => {
  const partners = [
    {
      background: partnerImg1,
      name: "Parceiro",
      description: "Lorem ipsum dolor sit amet, consectetur",
    },
    {
      background: partnerImg1,
      name: "Parceiro",
      description: "Lorem ipsum dolor sit amet, consectetur",
    },
  ];

  return (
    <div className="partnersContainer">
      {partners.map((partner, index) => (
        <PartnerCard
          key={index}
          background={partner.background}
          name={partner.name}
          description={partner.description}
        />
      ))}
    </div>
  );
};

export default Partners;
