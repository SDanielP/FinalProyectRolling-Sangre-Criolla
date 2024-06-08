import '../../../Styles/Dprod/Dprod.css';
import Button from 'react-bootstrap/Button';

function FormProd() {
    return (
        <section className='formP container-fluid border mt-3 bg-opacity-10  p-2'>
        <article className='ms-3'>
        <h2 className='fs-3'>Nombre del producto</h2>
        <h3 className='fs-5'>$$$$</h3>
        </article>
        <form className='mt-3 ms-3 me-3'>
            <section className="mt-5 mb-3 d-grid gap-2">
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