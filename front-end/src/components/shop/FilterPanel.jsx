import React from "react";

import "../../styles/components/shop/FilterPanel.css";
import PriceFilter from "./productsFilter/PriceFilter";
import CategoriesFilter from "./productsFilter/CategoriesFilter";
import ColorsFilter from "./productsFilter/ColorsFilter";
import SizeFilter from "./productsFilter/SizeFilter";

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
