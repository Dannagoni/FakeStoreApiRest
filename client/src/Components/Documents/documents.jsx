import React from 'react';
import DocumentsOptions from './DocumetsOptions';

export const Documents = ({ selectedDescription }) => {
  const selectedOption = DocumentsOptions.find(option => option.name === selectedDescription);

  if (!selectedOption) {
    return (
      <div className="text-gray-500">Selecciona una opción para ver la documentación.</div>
    );
  }

  return (
    <div className="ml-auto border rounded ">
      <h2 className="text-lg font-bold mb-2">{selectedOption.name}</h2>
      <p className="mb-4">{selectedOption.description}</p>
      <ul>
        {Object.values(selectedOption.submenus).map((submenu, subindex) => (
          <li key={subindex} className="mb-2">
            <h3 className="text-md font-semibold">{submenu.title}</h3>
            <p>{submenu.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
