import useApp from "../hooks/useApp";
import api from "../services/api";

function getHeaders() {
    const token = localStorage.getItem('token');
    return { 'Authorization': `Bearer ${token}` }
}

//Get Contatos -----------------------------------------------------------------------------------------------------
export async function getContactsRequest(params) {
    const headers = getHeaders()
    if (params) {
        const response = await api.get(`/contatos/${params}`, { headers });
        return response
    }
    const response = await api.get("/contatos", { headers });
    return response
}
// ------------------------------------------------------------------------------------------------------


//POST Login -----------------------------------------------------------------------------------------------------
export async function postLogin(data) {
    const response = await api.post("/login", { ...data });
    return response
}
// -----------------------------------------------------------------------------------------------------


//POST Cadastro ---------------------------------------------------------------------------------------------------------
export async function postRegister(data) {
    const response = await api.post("/usuarios", { ...data });
    return response
}
// ------------------------------------------------------------------------------------------------------


//Post Contatos -----------------------------------------------------------------------------------------------------
export async function postContacts(data) {
    const headers = getHeaders();
    console.log(data)
    const response = await api.post("/contatos", { ...data }, { headers: headers });
    return response
}
// ------------------------------------------------------------------------------------------------------


//PUT Contatos -----------------------------------------------------------------------------------------------------
export async function putContacts(id, data) {
    const headers = getHeaders()
    const response = await api.put(`/contatos/${id}`, { ...data }, { headers });
    return response
}
// ------------------------------------------------------------------------------------------------------


//Delete Contatos -----------------------------------------------------------------------------------------------------
export async function deleteContacts(id) {
    const headers = getHeaders()
    const response = await api.delete(`/contatos/${id}`, { headers })
    return response
}
// ------------------------------------------------------------------------------------------------------
