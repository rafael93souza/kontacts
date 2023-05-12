import axios from "axios";

export default axios.create({
    baseURL: "https://back-end-dindin.onrender.com",
    //baseURL: "http://localhost:3001", 
    timeout: 10000,
    headers: { 'Content-Type': 'application/json' }

});