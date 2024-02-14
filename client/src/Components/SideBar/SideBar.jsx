
import React, { useState } from 'react';
import styles from './SideBar.module.css';


const items = [1,2,3]
const Sidebar = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  return (
    <div className={styles.container}>
    <div className={styles.sidebar}>
      <div className={styles.nav}>
        {items.map((item, index) => (
          <div
            key={index}
            className={`${styles.item} ${selectedItem === item ? styles.selected : ''}`}
            onClick={() => handleItemClick(item)}
          >
            {item}
          </div>
        ))}
      </div>
      <div className={styles.documentation}>
        {selectedItem && (
          <div>
            <h2>{selectedItem}</h2>
            {/* Aquí colocarías la documentación específica para cada ítem */}
          </div>
        )}
      </div>
    </div>
    </div>
  );
};

export default Sidebar;
