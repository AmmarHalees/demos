import React from 'react';
import './Card.css';


const Card = ({ title, id, price, desc }) => {
  return (


      <div className="card">

        <div className="cardimage"></div>

        <div className="cardBody">

          <h2>{title}</h2>

          <p>{desc}</p>

          <footer>

            Price = {price}

          </footer>

        </div>

      </div>



  );
}

export default Card;