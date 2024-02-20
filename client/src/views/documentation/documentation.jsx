import React, { useState } from 'react';
import { Sidebar } from '../../Components/SideBar/SideBar';
import { Documents } from '../../Components/Documents/documents';

export const Documentation = () => {
  const [selectedDescription, setSelectedDescription] = useState('');

  const handleOptionClick = (description) => {
    setSelectedDescription(description);
  };

  return (
    <div className="flex">
      <Sidebar handleOptionClick={handleOptionClick} />
      <Documents selectedDescription={selectedDescription} />
    </div>
  );
};
