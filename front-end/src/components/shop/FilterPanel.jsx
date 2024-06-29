import "../../styles/components/shop/FilterPanel.css";
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
      <CategoriesFilter />
      <p className="title-filter-panel">Filtrar por</p>
      <hr className="hr-color"/>
      <PriceFilter />
      <hr className="hr-color"/>
      <ColorsFilter />
      <hr className="hr-color"/>
      <SizeFilter />
    </div>
  );
};

export default FilterPanel;
