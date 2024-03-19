import axios from "axios";

export const $host = axios.create({
    baseURL: 'http://test-backend.itdelta.agency/api/',
    headers: {'Content-type': 'application/json; charset=UTF-8'}
});