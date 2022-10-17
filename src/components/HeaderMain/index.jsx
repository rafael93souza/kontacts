import './style.css'
import logoKontacts from '../../assets/KONTACTS-logo.svg';
import iconGoOut from '../../assets/Icon-go-out.svg';
import { clear } from '../../utils/storage';
import useApp from '../../hooks/useApp';

function HeaderMain() {
    const { navigate } = useApp();

    function handleGoOut() {
        clear()
        navigate("/sign-in")
    }
    return (
        <header>
            <img src={logoKontacts} alt='Logo Kontacts' />
            <img className='go-out'
                src={iconGoOut}
                alt='clique para sair'
                onClick={() => handleGoOut()}
            />
        </header>
    )
}

export default HeaderMain;