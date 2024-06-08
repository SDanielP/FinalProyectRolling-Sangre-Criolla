import React, { useState } from "react";
import { Collapse, Button, CardBody, Card } from "reactstrap";

import "../../../styles/components/shop/productsFilter/FilterPanel.css";
import PriceFilter from "./PriceFilter";
import CategoriesFilter from "./CategoriesFilter";

const FilterPanel = () => {
  const [priceOpen, setPriceOpen] = useState(false);
  const [colorOpen, setColorOpen] = useState(false);
  const [sizeOpen, setSizeOpen] = useState(false);

  return (
    <div className="filter-panel">
      <h3>Filtrar por</h3>

      <Button
        color="primary"
        onClick={() => setPriceOpen(!priceOpen)}
        style={{ marginBottom: "1rem" }}
      >
        Categoria
      </Button>

      <Collapse isOpen={priceOpen}>
        <Card className="card">
        <CategoriesFilter />
        </Card>
      </Collapse>
      <Button
        color="primary"
        onClick={() => setPriceOpen(!priceOpen)}
        style={{ marginBottom: "1rem" }}
      >
        Precio
      </Button>

      <Collapse isOpen={priceOpen}>
        <Card className="card">
          <PriceFilter />
        </Card>
      </Collapse>

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
            {/* Aquí puedes agregar los colores disponibles */}
            <ul>
              <li>Color 1</li>
              <li>Color 2</li>
              <li>Color 3</li>
            </ul>
          </CardBody>
        </Card>
      </Collapse>

      <Button
        color="primary"
        onClick={() => setSizeOpen(!sizeOpen)}
        style={{ marginBottom: "1rem" }}
      >
        Tamaño
      </Button>
      <Collapse isOpen={sizeOpen}>
        <Card>
          <CardBody>
            <ul>
              <li>Grande</li>
              <li>Mediano</li>
              <li>One size</li>
              <li>Pequeño</li>
            </ul>
          </CardBody>
        </Card>
      </Collapse>
    </div>
  );
};

export default FilterPanel;
