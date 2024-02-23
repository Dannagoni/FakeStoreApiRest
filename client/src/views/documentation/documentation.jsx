import React, { useState } from "react";
import { Sidebar } from "../../Components/SideBar/SideBar";
import { Documents } from "../../Components/Documents/documents";

export const Documentation = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [subOptionDescription, setSubOptionDescription] = useState(null);

  const handleOptionClick = (optionDescription) => {
    setSelectedOption(optionDescription);
    // Reiniciar la subopción seleccionada al hacer clic en una nueva opción principal
    setSubOptionDescription(null);
  };

  const handleSubmenuDescription = (submenuDescription) => {
    setSubOptionDescription(submenuDescription);
  };

  return (
    <div className="flex">
      <Sidebar
        handleOptionClick={handleOptionClick}
        handleSubmenuDescription={handleSubmenuDescription}
      />
      <Documents
        selectedOption={selectedOption}
        subOptionDescription={subOptionDescription}
      />
    </div>
  );
};
