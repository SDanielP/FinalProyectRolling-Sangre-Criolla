import React from "react";

import "../../../styles/components/shop/productsFilter/FilterPanel.css";
import PriceFilter from "./PriceFilter";
import CategoriesFilter from "./CategoriesFilter";
import ColorsFilter from "./ColorsFilter";
import SizeFilter from "./SizeFilter";

const FilterPanel = () => {
  
  return (
    <div className="filter-panel">
      <p>Categorías</p>
      <hr />
      <CategoriesFilter />
      <p>Filtrar por</p>
      <hr />
      <PriceFilter />
      <hr />
      <ColorsFilter />
      <hr />
      <SizeFilter />
    </div>
  );
};

export default FilterPanel;
