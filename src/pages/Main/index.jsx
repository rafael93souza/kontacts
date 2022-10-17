import { useEffect, useState } from 'react';
import ErrorCard from '../../components/ErrorCard';
import FormContact from '../../components/FormContact';
import HeaderMain from '../../components/HeaderMain';
import SuccessCard from '../../components/SuccessCard';
import TableContacts from '../../components/TableContacts';
import useApp from '../../hooks/useApp';
import './style.css';

function Main() {
    const { modal, error, success, formModal, handleEditContact, handleModalDelete,
        contacts, setContacts, getContacts } = useApp();

    useEffect(() => {
        getContacts();
    }, [])
    return (
        <div className='container'>
            <div className='div-error-success-main'>
                {error && <ErrorCard pag="main" />}
                {success && <SuccessCard pag="main" />}
            </div>

            {modal && formModal}
            <HeaderMain />
            <div className='container-main'>
                <button
                    className='btn-add-contact'
                    onClick={() => handleEditContact()}
                >Adicionar</button>
                <TableContacts
                    rows={contacts}
                    handleEditContact={handleEditContact}
                    handleModalDelete={handleModalDelete}
                />
            </div>

        </div>
    )
}

export default Main;