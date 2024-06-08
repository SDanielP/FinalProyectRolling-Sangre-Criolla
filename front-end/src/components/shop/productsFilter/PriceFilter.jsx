import React, { useState, useEffect } from "react";
import Slider from "react-slider";
import { usePriceFilter } from "../../../store/productsFilter/usePriceFilter.js";
import { useDebounce } from "@uidotdev/usehooks";

import "../../../styles/components/shop/categoriesClient/PriceFilter.css";

const PriceFilter = () => {
  const [values, setValues] = useState([0, 1000]);
  const {setMinPrice, setMaxPrice} = usePriceFilter();

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
    <div
      style={{
        padding: "10px",
        border: "1px solid #ddd",
        borderRadius: "5px",
        boxShadow: "0 0 0 rgba(0, 0, 0, 0.1)",
      }}
    >
      <Slider
        className="slider"
        value={values}
        onChange={handleChange}
        // onMouseUp={console.log('mouse up')}
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
        <div>
          <span>Precio: </span>
          <span id="minPrice">{values[0]} --- </span>
          <span id="maxPrice">{values[1]}</span>
        </div>
      </div>
    </div>
  );
};

export default PriceFilter;
