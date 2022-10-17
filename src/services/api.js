import axios from "axios";

export default axios.create({
    baseURL: "https://contacts-api-cubos.herokuapp.com",
    /*     baseURL: " http://localhost:3334", */
    timeout: 10000,
    headers: { 'Content-Type': 'application/json' }

});