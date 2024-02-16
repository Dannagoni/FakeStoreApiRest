import React from 'react';
import styles from './Card.module.css'; // Importar los estilos CSS Modules

const Card = () => {
  return (
    <div className={styles.card}>
      <h2>Title</h2>
      <p>Content of the card goes here...</p>
    </div>
  );
};

export default Card;
