import React, { useState } from 'react';
import DocumentsOptions from '../Documents/DocumetsOptions';

export const Sidebar = ({ handleOptionClick, handleSubmenuDescription }) => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [openDashboard, setOpenDashboard] = useState(null);
  const [selectedSubmenu, setSelectedSubmenu] = useState(null);

  const handleItemClick = (name) => {
    setSelectedItem(selectedItem === name ? null : name); // Deseleccionar si ya está seleccionado
    setSelectedSubmenu(null); // Reiniciar el submenú seleccionado cuando se hace clic en una nueva opción principal
    handleOptionClick(name);
    toggleDashboardSubMenu(name); // Activar la transición del submenú
  };

  const handleSubmenuClick = (submenuTitle) => {
    setSelectedSubmenu(submenuTitle);
    handleSubmenuDescription(submenuTitle);
  };

  const toggleDashboardSubMenu = (dashboardName) => {
    setOpenDashboard(openDashboard === dashboardName ? null : dashboardName);
  };

  return (
    <aside id="default-sidebar" className="fixed top-15 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0 bg-blue950" aria-label="Sidebar">
      <div className="h-full px-3 py-4 overflow-y-auto">
        <ul className="space-y-2 font-medium ml-2 mt-2">
          {DocumentsOptions.map((option, index) => (
            <li key={index}>
              <a
                href={`#${option.name}`}
                className={`flex items-center mb-4 rounded-lg dark:text-white hover:bg-gradient-to-br from-purple to-purple-600 dark:hover:bg-gradient-to-br from-purple to-purple-600 group ${selectedItem === option.name ? 'bg-gradient-to-br from-purple to-purple-600' : ''}`}
                onClick={() => handleItemClick(option.name)}
              >
                <svg className={`w-3 h-3 ml-3 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-white0 dark:group-hover:text-white ${selectedItem === option.name ? 'text-white' : ''}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {selectedItem === option.name ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  )}
                </svg>
                <span className={`ms-3 ${selectedItem === option.name ? 'text-white' : 'text-gray-500'}`}>{option.name}</span>
              </a>
              <ul className={`pl-4 space-y-2 font-medium overflow-hidden transition-all duration-300 ${openDashboard === option.name ? 'max-h-40' : 'max-h-0'}`}>
                {Object.values(option.submenus).map((submenu, submenuIndex) => (
                  <li key={submenuIndex}>
                    <a
                      href={`#${submenu.title}`}
                      className={`pl-6 block rounded-lg dark:text-white hover:bg-gradient-to-br from-purple to-purple-600 dark:hover:bg-gradient-to-br from-purple to-purple-600 ${selectedItem === option.name && selectedSubmenu === submenu.title ? 'bg-gradient-to-br from-purple to-purple-600 text-white' : 'text-gray-500'}`}
                      onClick={() => {
                        handleSubmenuClick(submenu.title);
                      }}
                    >
                      {submenu.title}
                    </a>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};
