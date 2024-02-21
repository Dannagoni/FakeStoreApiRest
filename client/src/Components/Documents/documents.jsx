import React, { useState } from 'react';
import DocumentsOptions from './DocumetsOptions';

export const Documents = ({ selectedDescription }) => {
  const selectedOption = DocumentsOptions.find(option => option.name === selectedDescription);
  const [selectedSubmenu, setSelectedSubmenu] = useState(null); // Nuevo estado para almacenar el submenu seleccionado

  if (!selectedOption) {
    return (
      <div className="text-gray-500">Selecciona una opción para ver la documentación.</div>
    );
  }

  const renderSubmenuDetails = (submenu) => {
    return (
      <div>
        <h3 className="text-md font-semibold">{submenu.title}</h3>
        <p><strong>Descripción:</strong> {submenu.description}</p>
        <p><strong>Endpoint:</strong> {submenu.endpoint}</p>
        {/* Añade más detalles según sea necesario */}
      </div>
    );
  };

  return (
    <div className="ml-auto border rounded ">
      <h2 className="text-lg font-bold mb-2">{selectedOption.name}</h2>
      {selectedOption && Object.entries(selectedOption.submenus).map(([key, submenu]) => (
        key === selectedSubmenu && (
          <div key={key} className="mb-4">
            {renderSubmenuDetails(submenu)}
          </div>
        )
      ))}
    </div>
  );
};
