import Form from "react-bootstrap/Form";

function FormSize({ sizes }) {
  return (
    <section className="col-md-3">
      <h3 className="fs-5">Elegir Talle</h3>
      <Form.Select aria-label="Default select example">
        {sizes && sizes.length > 0 ? (
          sizes.map((size, index) => (
            <option key={index} value={size}>
              {size}
            </option>
          ))
        ) : (
          <option value="" disabled>
            No hay talles disponibles
          </option>
        )}
      </Form.Select>
    </section>
  );
}

export default FormSize;
