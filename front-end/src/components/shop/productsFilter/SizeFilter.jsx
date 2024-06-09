import React, { useState, useEffect } from "react";
import { Collapse, Button} from "reactstrap";
import '../../../styles/components/shop/productsFilter/SizeFilter.css';

const sizeOptions = [
    { id: 1, value: "xs", label: "XS" },
    { id: 2, value: "s", label: "S" },
    { id: 3, value: "m", label: "M" },
    { id: 4, value: "l", label: "L" },
    { id: 5, value: "xl", label: "XL" },
    { id: 6, value: "xxl", label: "XXL" },
  ];
const SizeFilter = () => {
    const [sizeOpen, setSizeOpen] = useState(false);
  /* ----- Uso de useNavigate() ----- */
//   const navigate = useNavigate(); // Importar useNavigate()

  const handleSize = (nuevoTamanio) => {
    setSizeOpen(nuevoTamanio);
    // setUbication(nuevoTamanio);
    // setIsDropdownOpen(true); // Cierra el dropdown al seleccionar una opción
    // navigate(`/products/${nuevoTamanio.toLowerCase()}`);
  };

  useEffect(() => {
    // console.log(selectedCategory);
  }, [sizeOpen]);
  return (
    <>
      <Button
        color="primary"
        onClick={() => setSizeOpen(!sizeOpen)}
        style={{ marginBottom: "1rem" }}
      >
        Tamaño
      </Button>
      <Collapse isOpen={sizeOpen} className="tallas">
        {sizeOptions.map((size) => (
          <div
            className="talla"
            key={sizeOptions.indexOf(size)}
            onClick={() => (handleSize(size))}
            style={{ cursor: "pointer" }}
            // eventKey={size.charAt(0).toUpperCase() + size.slice(1)}
          >
              <span>{(size.label)}</span>
            
          </div>
        ))}
      </Collapse>
    </>
  );
};

export default SizeFilter;
