import { MdLocationPin } from 'react-icons/md';
import { RiInstagramFill } from 'react-icons/ri';
import { FaFacebook } from 'react-icons/fa';
import './contactoEstilo.css';

function InfoContacto() {
  // const icono = <MdEmail className="iconoContacto" />;
  return (
    <>
      <div className="cajaContacto">
        <FaFacebook className="iconoContacto" />
        <p>Sangre Criolla</p>
      </div>
      <div className="cajaContacto">
        <RiInstagramFill className="iconoContacto" />
        <p>@sangre_criolla</p>
      </div>
      <div className="cajaContacto">
        <MdLocationPin className="iconoContacto" />
        <p>Moreno, Buenos Aires</p>
      </div>
    </>
  );
}
export default InfoContacto;
