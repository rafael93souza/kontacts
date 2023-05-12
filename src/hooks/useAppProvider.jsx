import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "react-use";
import CardDelete from "../components/CardDelete";
import FormContact from "../components/FormContact";
import { treatTelephoneInput } from "../utils/functions";
import { deleteContacts, getContactsRequest } from "../utils/requests";

function useAppProvider() {

    function handleEditContact(row) {
        if (row) {
            setFormModal(<FormContact contact={row} />);
        } else {
            setFormModal(<FormContact />);
        }
        setModal(true);
    }
    function handleModalDelete(row) {
        setFormModal(<CardDelete name={row.nome} id={row.id} />);
        setModal(true);
    }

    async function handleDeleteContact(e, id) {
        e.preventDefault();
        try {
            await deleteContacts(id);
            const localContact = [...contacts];
            const IndexContac = localContact.findIndex(Element => Element.id === id);
            localContact.splice(IndexContac, 1)
            setContacts(localContact);
            setSuccess("Contato Excluido com sucesso");
            setModal(false);
        } catch (error) {
            setError("Erro ao concluir sua solicitação, tente novamente!");
        }
    }
    function handleChange(e) {
        if (e.target.name === 'telephone') {
            setFormContact({ ...formContact, [e.target.name]: treatTelephoneInput(e) });
        } else {
            setFormContact({ ...formContact, [e.target.name]: e.target.value });
        }
    }


    function handleClearForm() {
        setFormUser({ name: "", email: "", password: "", showPassword: false });
        setFormContact({ name: "", email: "", telephone: "" });
        setError("");
    }

    async function getContacts() {
        try {
            const response = await getContactsRequest();
            setContacts(response.data)
        } catch (error) {
            setError("Algo errado aconteceu!")
        }
    }

    const navigate = useNavigate()
    const [user, setUser] = useState({});
    const [contacts, setContacts] = useState([]);
    const [success, setSuccess] = useState("");
    const [error, setError] = useState("");

    const [userLS, setUserLS, removeUserLS] = useLocalStorage("user");
    const [tokenLS, setTokenLS, removeTokenLS] = useLocalStorage("token");

    const [formUser, setFormUser] = useState({ name: "", email: "", password: "", showPassword: false });
    const [formContact, setFormContact] = useState({ name: "", email: "", telephone: "" });

    const [modal, setModal] = useState(false);
    const [formModal, setFormModal] = useState(false);


    return {
        user, setUser,
        contacts, setContacts,
        userLS, setUserLS, removeUserLS,
        tokenLS, setTokenLS, removeTokenLS,
        formUser, setFormUser,
        success, setSuccess,
        error, setError,
        navigate,
        formContact, setFormContact,
        modal, setModal,
        formModal, setFormModal,
        handleEditContact,
        handleDeleteContact,
        handleChange,
        handleClearForm,
        getContacts,
        handleModalDelete
    }

}
export default useAppProvider;
