import '../../../styles/components/shop/Dprod/Dprod.css'
import Button from 'react-bootstrap/Button';
import FormSize from './FormS';
import FormuColor from './FormC';

function FormProd({ name, price, color, sizes }) {
  return (
    <section className='formP container-fluid border mt-3 bg-opacity-10 p-2'>
      <article className='ms-3'>
        <h2 className='fs-3'>{name}</h2>
        <h3 className='fs-4'>${price}</h3>
        <h4 className='fs-5'>{color}</h4>
      </article>
      <form className='mt-3 ms-3 me-3'>
        <section className=" mb-3 d-grid gap-2">
          <FormSize sizes={sizes} />
          <Button variant="outline-success btn-lg col-12" size="lg">
            Añadir al carrito
          </Button>
          <Button variant="outline-secondary" size="lg">
            Comprar ahora
          </Button>
        </section>
      </form>
    </section>
  );
}

export default FormProd;