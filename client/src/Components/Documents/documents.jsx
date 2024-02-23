import React from "react";
import DocumentsOptions from "./DocumetsOptions";

export const Documents = ({ selectedOption, subOptionDescription }) => {
  // Encuentra la opción seleccionada
  const optionData = DocumentsOptions.find(
    (option) => option.name === selectedOption
  );

  // Función para encontrar el submenú seleccionado
  const findSubmenu = () => {
    if (optionData && optionData.submenus) {
      for (const submenu of Object.values(optionData.submenus)) {
        if (submenu.title === subOptionDescription) {
          return submenu;
        }
      }
    }
    return null;
  };

  // Encuentra el submenú seleccionado
  const subOptionData = findSubmenu();

  // Renderiza los detalles de la opción o del submenú según corresponda
  const renderDetails = () => {
    if (subOptionData) {
      // Si hay un submenú seleccionado, muestra los detalles del submenú
      return (
        <div>
          <h3 className="text-white text-4xl font-bold">
            {optionData.name}
          </h3>
          <hr
            className="border-gray-500 w-full mt-4 mb-4"
            style={{ maxWidth: "100%" }}
          />
          <h3 className="text-white text-4xl font-bold">
            {subOptionData.title}
          </h3>
          <p className="text-white mt-2 mb-6">{subOptionData.description}</p>
          <div className="flex items-center">
            <p className=" text-white bg-bluelight p-3 mr-5">
              {subOptionData.metodo_http}
            </p>
            <div className="bg-bluelight p-3">
              <p className="text-white">{subOptionData.endpoint}</p>
            </div>
          </div>
        </div>
      );
    } else if (optionData) {
      // Si no hay un submenú seleccionado pero hay una opción seleccionada, muestra los detalles de la opción
      return (
        <div>
          <h2 className="text-lg text-white font-bold">
            {optionData.name}
          </h2>
          <p className="text-lg text-white">
            <strong>Descripción:</strong> {optionData.description}
          </p>
        </div>
      );
    } else {
      // Si no hay ninguna opción ni submenú seleccionado, muestra un mensaje predeterminado
      return <p>Selecciona una opción del menú lateral.</p>;
    }
  };

  return <div className="ml-80 mr-80 mt-14">{renderDetails()}</div>;
};
