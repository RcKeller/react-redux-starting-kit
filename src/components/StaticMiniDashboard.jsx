import React from 'react';
import Card from '../components/Card.jsx';
import WelcomeCard from '../components/WelcomeCard.jsx';

export default ({ welcomeMsg, cards }) => (
  <div className="mdl-layout__container">
    <div className="mdl-layout">
      <div className="mdl-layout mdl-color--grey-100">
        <div className="dashboard-wrapper">
          <WelcomeCard {...welcomeMsg} />
          <div className="cards-wrapper">
            {cards.map((card, index) => (
              <Card key={index} className="card-item" {...card} />
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);
