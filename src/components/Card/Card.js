import React from 'react';
import './Card.css';

const image_style = (background) => {
  return (
    {
      background : `url(${background})`,
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center'
    }
  )
}

const Card = ({ title, price, desc, background }) => {

  return (


    <div className="card">

      <div className="cardimage" style={image_style(background)}></div>

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