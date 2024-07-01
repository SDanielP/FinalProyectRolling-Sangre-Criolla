import "../../styles/components/shop/FilterPanel.modules.css";
import React from "react";
import PriceFilter from "./productsFilter/PriceFilter";
import CategoriesFilter from "./productsFilter/CategoriesFilter";
import ColorsFilter from "./productsFilter/ColorsFilter";
import SizeFilter from "./productsFilter/SizeFilter";

const FilterPanel = () => {
  return (
    <div className="filter-panel">
      <p className="title-filter-panel">Categorías</p>
      <hr className="hr-color"/>
      <CategoriesFilter className="filter-panel-btn"/>
      <p className="title-filter-panel">Filtrar por</p>
      <hr className="hr-color"/>
      <PriceFilter className="filter-panel-btn"/>
      <hr className="hr-color"/>
      <ColorsFilter className="filter-panel-btn"/>
      <hr className="hr-color"/>
      <SizeFilter className="filter-panel-btn"/>
    </div>
  );
};

export default FilterPanel;
