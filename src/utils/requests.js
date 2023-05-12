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
        const response = await api.get(`/contacts/${params}`, { headers });
        return response
    }
    const response = await api.get("/contacts", { headers });
    return response
}
// ------------------------------------------------------------------------------------------------------


//POST Login -----------------------------------------------------------------------------------------------------
export async function postLogin(data) {
    const response = await api.post("/sing-in", { ...data });
    return response
}
// -----------------------------------------------------------------------------------------------------


//POST Cadastro ---------------------------------------------------------------------------------------------------------
export async function postRegister(data) {
    const response = await api.post("/sing-up", { ...data });
    return response
}
// ------------------------------------------------------------------------------------------------------


//Post Contatos -----------------------------------------------------------------------------------------------------
export async function postContacts(data) {
    const headers = getHeaders();
    console.log(data)
    const response = await api.post("/contacts", { ...data }, { headers: headers });
    return response
}
// ------------------------------------------------------------------------------------------------------


//PUT Contatos -----------------------------------------------------------------------------------------------------
export async function putContacts(id, data) {
    const headers = getHeaders()
    const response = await api.put(`/contacts/${id}`, { ...data }, { headers });
    return response
}
// ------------------------------------------------------------------------------------------------------


//Delete Contatos -----------------------------------------------------------------------------------------------------
export async function deleteContacts(id) {
    const headers = getHeaders()
    const response = await api.delete(`/contacts/${id}`, { headers })
    return response
}
// ------------------------------------------------------------------------------------------------------
