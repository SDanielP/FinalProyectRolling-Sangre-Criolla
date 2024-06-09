import React, { useState } from "react";
import { Collapse, Button, CardBody, Card } from "reactstrap";

import "../../../styles/components/shop/productsFilter/FilterPanel.css";
import PriceFilter from "./PriceFilter";
import CategoriesFilter from "./CategoriesFilter";
import ColoursFilter from "./ColoursFilter";
import SizeFilter from "./SizeFilter";

const FilterPanel = () => {
  const [colorOpen, setColorOpen] = useState(false);
  


  return (
    <div className="filter-panel">
      <h3>Filtrar por</h3>

      <CategoriesFilter />
      <PriceFilter />
      {/* <Button
        color="primary"
        onClick={() => setPriceOpen(!priceOpen)}
        style={{ marginBottom: "1rem" }}
      >
        Precio
      </Button>

      <Collapse isOpen={priceOpen} >
          <PriceFilter />
      </Collapse> */}

      <Button
        color="primary"
        onClick={() => setColorOpen(!colorOpen)}
        style={{ marginBottom: "1rem" }}
      >
        Color
      </Button>

      <Collapse isOpen={colorOpen}>
        <Card>
          <CardBody>
            <ColoursFilter />
          </CardBody>
        </Card>
      </Collapse>

      <SizeFilter />
    </div>
  );
};

export default FilterPanel;
