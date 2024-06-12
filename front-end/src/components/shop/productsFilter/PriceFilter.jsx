import "../../../styles/components/shop/productsFilter/PriceFilter.css";
import React, { useState, useEffect } from "react";
import Slider from "react-slider";
import { Collapse, Button } from "reactstrap";
import { usePriceFilter } from "../../../store/productsFilter/usePriceFilter.js";
import { useDebounce } from "@uidotdev/usehooks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faMinus } from "@fortawesome/free-solid-svg-icons";

const PriceFilter = () => {
  /* ----- Estados para los botones ----- */
  const [values, setValues] = useState([0, 1000]);
  const [priceOpen, setPriceOpen] = useState(false);

  /* ----- Estado Precio - Zustand ----- */
  const { setMinPrice, setMaxPrice } = usePriceFilter();

  /* ----- Uso de useDebounce para la rapidez del filtro Precio  ----- */
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
        className="price-btn"
        onClick={() => setPriceOpen(!priceOpen)}
        style={{ marginBottom: "1rem", width: "100%" }}
      >
        <span>Precio</span>
        {priceOpen === false ? (
          <FontAwesomeIcon
            icon={faPlus}
            size="sm"
            style={{ color: "#f5f5dc" }}
          />
        ) : (
          <FontAwesomeIcon
            icon={faMinus}
            size="sm"
            style={{ color: "#f5f5dc" }}
          />
        )}
      </Button>

      <Collapse isOpen={priceOpen}>
        <div
          style={{
            padding: "10px",
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
