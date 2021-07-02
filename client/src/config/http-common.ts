import axios, { AxiosInstance } from "axios";

const apiClient: AxiosInstance = axios.create({
    baseURL: process.env.VUE_APP_AXIOS_BASE_URL,
    headers: {
        "Content-type": "application/json",
    },
});

export default apiClient;