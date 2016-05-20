import React from 'react';
import WelcomeCard from '../components/WelcomeCard.jsx';
import CardList from '../components/CardList.jsx';

export default ({ welcomeMsg, cards }) => (
  <div className="mdl-layout__container">
    <div className="mdl-layout">
      <div className="mdl-layout mdl-color--grey-100">
        <div className="dashboard-wrapper">
          <WelcomeCard {...welcomeMsg} />
          <CardList cards={cards} />          
        </div>
      </div>
    </div>
  </div>
);
