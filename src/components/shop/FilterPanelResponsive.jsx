import "../../styles/components/shop/FilterPanelResponsive.modules.css";
import React, {useRef, useEffect} from "react";
import CloseButton from "react-bootstrap/CloseButton";
import PriceFilter from "./productsFilter/PriceFilter";
import CategoriesFilter from "./productsFilter/CategoriesFilter";
import ColorsFilter from "./productsFilter/ColorsFilter";
import SizeFilter from "./productsFilter/SizeFilter";

const FilterPanel = ({ isOpen, onClose }) => {
  const menuRef = useRef(null);

  // Manejar clics fuera del menú para cerrarlo
  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      onClose();
    }
  };

  // Agregar evento global para cerrar el menú al hacer clic fuera
  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  const handleDropdownClick = (event) => {
    const dropdownContent = event.currentTarget.nextElementSibling;
    dropdownContent.classList.toggle("show");
  };


  return (
    <div className={`menu-overlay ${isOpen ? "open" : ""}`}>
      <div className="filter-panel menu-content" ref={menuRef}>
        <CloseButton onClick={onClose} className="close" />
        <p className="title-filter-panel">Categorías</p>
        <hr className="hr-color" />
        <CategoriesFilter className="filter-panel-btn" />
        <p className="title-filter-panel">Filtrar por</p>
        <hr className="hr-color" />
        <PriceFilter className="filter-panel-btn" />
        <hr className="hr-color" />
        <ColorsFilter className="filter-panel-btn" />
        <hr className="hr-color" />
        <SizeFilter className="filter-panel-btn" />
      </div>
    </div>
  );
};

export default FilterPanel;
