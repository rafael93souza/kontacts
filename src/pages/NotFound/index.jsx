import './style.css';
import imageNotFound from '../../assets/not-found.svg'
import { Link } from 'react-router-dom';
function NotFound() {
    return (
        <div className='container-notfound'>
            <img src={imageNotFound} />
            <Link className='btn-notfound' to='/main'> Voltar a página inicial</Link>
        </div>
    )

}

export default NotFound