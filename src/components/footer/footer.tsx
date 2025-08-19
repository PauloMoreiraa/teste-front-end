import React from "react";
import "./footer.scss";

import logo from "./../../assets/icons/logo.png";
import iconLinkedin from "./../../assets/icons/linkedin.png";
import iconInstagram from "./../../assets/icons/instagram.png";
import iconFacebook from "./../../assets/icons/facebook.png";
import Newsletter from "./newsletter/newsletter";

const Footer: React.FC = () => {
  return (
    <footer>
      <Newsletter />
      <div className="bodyFooter">
        <div className="footerColumnFirst">
          <img src={logo} alt="Logo" className="footerLogo" />
          <p className="footerDescription">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac
            vulputate dolor.
          </p>
          <div className="socialIcons">
            <a href="#">
              <img src={iconInstagram} alt="Instagram" />
            </a>
            <a href="#">
              <img src={iconFacebook} alt="Facebook" />
            </a>
            <a href="#">
              <img src={iconLinkedin} alt="Linkedin" />
            </a>
          </div>
        </div>

        <div className="footerColumn">
          <span className="subtitle">Institucional</span>
          <ul>
            <li>
              <a href="#">Sobre Nós</a>
            </li>
            <li>
              <a href="#">Movimento</a>
            </li>
            <li>
              <a href="#">Trabalhe Conosco</a>
            </li>
          </ul>
        </div>

        <div className="footerColumn">
          <span className="subtitle">Ajuda</span>
          <ul>
            <li>
              <a href="#">Suporte</a>
            </li>
            <li>
              <a href="#">Fale Conosco</a>
            </li>
            <li>
              <a href="#">Perguntas Frequentes</a>
            </li>
          </ul>
        </div>

        <div className="footerColumn">
          <span className="subtitle">Termos</span>
          <ul>
            <li>
              <a href="#">Termos e Condições</a>
            </li>
            <li>
              <a href="#">Política de Privacidade</a>
            </li>
            <li>
              <a href="#">Troca e Devolução</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="copyright">
        <span className="copyName">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
