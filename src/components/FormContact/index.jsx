import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import { useEffect } from 'react';
import iconClose from '../../assets/Icon-close.svg';
import useApp from '../../hooks/useApp';
import { postContacts, putContacts } from '../../utils/requests';
import './style.css';

export default function FormContact({ contact }) {
    const { formContact, setFormContact,
        handleChange, handleClearForm,
        contacts, setContacts,
        setModal, setError, setSuccess
    } = useApp();


    useEffect(() => {
        if (contact) return setFormContact({
            name: contact.nome,
            email: contact.email,
            telephone: contact.telefone
        })
    }, []);

    function closeModal() {
        handleClearForm()
        setModal(false)
    }


    async function handleSubmit(e) {
        e.preventDefault();

        if (!formContact.name) {
            return setError("Informe o nome do contato");
        }
        if (!formContact.email && !formContact.telephone) {
            return setError("Informe pelo menos email e telefone");
        }
        const data = {
            nome: formContact.name,
            email: formContact.email,
            telefone: formContact.telephone
        }
        try {
            if (!contact) {
                const response = await postContacts(data);
                console.log(response);
                setContacts([...contacts, ...response.data]);
                setSuccess("Contato Adicionado com sucesso");

            } else {
                const response = await putContacts(contact.id, data);
                console.log(response);
                const localContact = [...contacts];
                const IndexContac = localContact.findIndex(Element => Element.id === contact.id);
                localContact.splice(IndexContac, 1, { ...data, id: contact.id })
                setContacts(localContact);
                setSuccess("Contato Editado com sucesso");
            }
            handleClearForm();
            setModal(false);


        } catch (error) {
            setError("Erro ao concluir sua solicitação, tente novamente!");
            console.log(error);
        }
    }
    return (
        <div className='modal'>
            <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
                <form className='form-contact' onSubmit={handleSubmit}>
                    <h1 className='h1-register'>
                        {contact
                            ? 'Editar Contato'
                            : 'Novo Contato'
                        }
                    </h1>
                    <img
                        className='btn-close-modal'
                        onClick={() => closeModal()}
                        src={iconClose} alt='Clique aqui para fechar o formulário' />
                    <FormControl sx={{ mt: '16px', minWidth: '100%' }} variant="outlined">
                        <InputLabel htmlFor="name"
                            sx={{ fontSize: '1.6rem' }}
                        >Nome</InputLabel>
                        <OutlinedInput
                            id="name"
                            type='name'
                            value={formContact.name}
                            name='name'
                            onChange={(e) => handleChange(e)}
                            label="name"
                            sx={{
                                height: '51px',
                                width: '100%',
                                fontSize: '1.6rem'
                            }}
                        />
                    </FormControl>
                    <FormControl sx={{ mt: '16px', minWidth: '100%' }} variant="outlined">
                        <InputLabel htmlFor="email"
                            sx={{ fontSize: '1.6rem' }}
                        >E-mail</InputLabel>
                        <OutlinedInput
                            id="email"
                            type='text'
                            name='email'
                            value={formContact.email}
                            onChange={(e) => handleChange(e)}
                            label="email"
                            sx={{
                                height: '51px',
                                width: '100%',
                                fontSize: '1.6rem'
                            }}
                        />
                    </FormControl>
                    <FormControl sx={{ mt: "16px", minWidth: '100%' }} variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-password"
                            sx={{ fontSize: '1.6rem' }}
                        >Telefone</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-password"
                            value={formContact.telephone}
                            name='telephone'
                            onChange={(e) => handleChange(e)}
                            sx={{
                                height: '51px',
                                width: '100%',
                                fontSize: '1.6rem'
                            }}
                            label="Password"

                        />
                    </FormControl>

                    <button className='btn-sign-up btn-register'> {contact
                        ? 'SALVAR'
                        : 'CADASTRAR'
                    }</button>
                    <button onClick={() => handleClearForm()} type='button' className='btn-sign-up btn-cancel'>CANCELAR</button>
                </form>
            </Box>
        </div>
    );
}