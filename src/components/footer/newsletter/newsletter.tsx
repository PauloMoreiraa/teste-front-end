import React from 'react';
import './newsletter.scss';

const Newsletter: React.FC = () => {
  return (
    <div className="newsletterContainer">
      <div className="newsletterLeft">
        <span className='titleNewsletter'>Inscreva-se na nossa newsletter</span>
        <p>Assine a nossa newsletter e receba as novidades e conteúdos exclusivos da Econverse.</p>
      </div>

      <div className="newsletterRight">
        <div className="formRow">
          <input type="text" placeholder="Digite seu nome" />
          <input type="email" placeholder="Digite seu email" />
          <button className="subscribeBtn">Inscrever</button>
        </div>

        <div className="termsRow">
			<input type="checkbox" />
          <label>
            Aceito os termos e condições
          </label>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
