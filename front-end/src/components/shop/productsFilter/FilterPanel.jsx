import React from "react";

import "../../../styles/components/shop/productsFilter/FilterPanel.css";
import PriceFilter from "./PriceFilter";
import CategoriesFilter from "./CategoriesFilter";
import ColorsFilter from "./ColorsFilter";
import SizeFilter from "./SizeFilter";

const FilterPanel = () => {
  
  return (
    <div className="filter-panel">
      <h3>Filtrar por</h3>
      <CategoriesFilter />
      <PriceFilter />
      <ColorsFilter />
      <SizeFilter />
    </div>
  );
};

export default FilterPanel;
