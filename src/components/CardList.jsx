import React from 'react'
import Card from '../components/Card.jsx'

const CardList = ({cards}) => (
  <div className='cards-wrapper'>
    {cards.map((card, index) => (
      <Card key={index} className='card-item' {...card} />
    ))}
  </div>
)

export default CardList
