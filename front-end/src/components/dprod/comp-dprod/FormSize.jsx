import Form from 'react-bootstrap/Form';

function FormuSize() {
  return (
    <section className='col-md-3'>
    <h3 className='fs-5'>Elegir Talle</h3>
    <Form.Select aria-label="Default select example">
      <option value="1" selected>75</option>
      <option value="80">80</option>
      <option disabled value="85">85</option>
      <option value="90">90</option>
      <option value="95">95</option>
      <option value="100">100</option>
      <option value="105">105</option>
      <option value="110">110</option>
      <option value="115">115</option>
      <option value="120">120</option>
    </Form.Select>
    </section>
  );
}

export default FormuSize;