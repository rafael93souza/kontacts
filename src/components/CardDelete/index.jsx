import useApp from '../../hooks/useApp';
import './style.css';
import iconClose from '../../assets/Icon-close.svg';

export default function CardDelete({ name, id }) {
    const { handleDeleteContact, setModal } = useApp();

    return (
        <div className='modal'>

            <form className='form-delete' onSubmit={(e) => handleDeleteContact(e, id)}>
                <h1 className='h1-register'> Confirma a exclusão?</h1>
                <img
                    className='btn-close-modal'
                    onClick={() => setModal(false)}
                    src={iconClose} alt='Clique aqui para fechar o formulário' />
                <div className='div-delete'>
                    <strong >
                        Deseja excluir o contato, <span>{name}</span> ?
                    </strong>
                </div>
                <button className='btn-sign-up btn-register btn-delete'> Excluir</button>
                <button onClick={() => setModal(false)} type='button'
                    className='btn-sign-up btn-cancel btn-delete'>CANCELAR</button>
            </form>

        </div>
    );
}