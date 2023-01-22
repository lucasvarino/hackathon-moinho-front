import axios from "axios";
import { configApi } from "./config";

export default (function Api() {
    const api = axios.create(configApi);

    api.interceptors.request.use(
        (config) => {
            const token = localStorage.getItem("token");
            if (token) {
                config.headers.Authorization = `Bearer ${token}`;
            }
            
            return config;
        },
        (error) => {
            return Promise.reject(error);
        }
    );

    api.interceptors.response.use(
        (response) => response,
        (error) => {
            throw new Error(error.message);
        }
    );

    return api;
}) ();
