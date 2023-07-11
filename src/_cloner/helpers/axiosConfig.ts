import axios from "axios";

export const esaleHttp = axios.create({
    baseURL: "https://transferapi.saipacorp.com/api/",
    headers: {
        'Content-Type': 'application/json'
    }
})