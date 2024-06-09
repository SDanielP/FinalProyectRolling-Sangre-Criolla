import React, { useState, useEffect } from "react";
import Slider from "react-slider";
import { Collapse, Button } from "reactstrap";
import { usePriceFilter } from "../../../store/productsFilter/usePriceFilter.js";
import { useDebounce } from "@uidotdev/usehooks";

import "../../../styles/components/shop/productsFilter/PriceFilter.css";

const PriceFilter = () => {
  const [values, setValues] = useState([0, 1000]);
  const { setMinPrice, setMaxPrice } = usePriceFilter();
  const [priceOpen, setPriceOpen] = useState(false);

  const debouncedMinPrice = useDebounce(values[0], 1000);
  const debouncedMaxPrice = useDebounce(values[1], 1000);

  const handleChange = (newValues) => {
    setValues(newValues);
    setMinPrice(newValues[0]);
    setMaxPrice(newValues[1]);
  };

  useEffect(() => {
    setMinPrice(debouncedMinPrice);
    setMaxPrice(debouncedMaxPrice);
  }, [debouncedMinPrice, debouncedMaxPrice, setMinPrice, setMaxPrice]);

  return (
    <>
      <Button
        color="primary"
        onClick={() => setPriceOpen(!priceOpen)}
        style={{ marginBottom: "1rem", width:"100%"}}
      >
        Precio
      </Button>

      <Collapse isOpen={priceOpen}>
        <div
          style={{
            padding: "10px"
          }}
        >
          <Slider
            className="slider custom-slider"
            value={values}
            onChange={handleChange}
            min={0}
            max={1000}
          />

          <div
            style={{
              display: "flex",
              direction: "column",
              justifyContent: "space-between",
            }}
          >
            <div className="texto">
              <span id="minPrice">${values[0]} </span>
              <span id="maxPrice">${values[1]}</span>
            </div>
          </div>
        </div>
      </Collapse>
    </>
  );
};

export default PriceFilter;
