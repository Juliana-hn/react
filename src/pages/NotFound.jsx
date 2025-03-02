import notFoundImage from "@/assets/img/404.png";
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <main className='container text-center mt-5'>
            <img src={notFoundImage}
                 alt='Página no encontrada' 
                 className='img-fluid w-50' />
            <h2 className='mt-4 text-danger'>Página no encontrada.</h2>
            <Link to='/' className='btn btn-primary mt-3'>
                Volver al inicio
            </Link>
        </main>
  )
}

export default NotFound