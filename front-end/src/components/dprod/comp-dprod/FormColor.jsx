import Form from 'react-bootstrap/Form';

function FormuColor() {
    return ( 
        <section className='mt-4'>
      <h3 htmlFor='' className='fs-5'>Color</h3>
      {['radio'].map((type) => (
        <div key={`inline-${type}`} className="mb-3 flex-column align-items-start justify-content-start">
          <Form.Check
            inline
            label="Marrón"
            name="group1"
            type={type}
            id={`inline-${type}-1`}
            className="col-6 col-md-auto me-5"
          />
          <Form.Check
            inline
            label="Azúl"
            name="group1"
            type={type}
            id={`inline-${type}-2`}
            className="col-6 col-md-auto"
          />
        </div>
      ))}
    </section>
     );
}

export default FormuColor


