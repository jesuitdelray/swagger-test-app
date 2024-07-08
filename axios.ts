import axios from "axios"

const API_URL = "https://petstore.swagger.io/v2"

const $api = axios.create({
    baseURL: API_URL,
    withCredentials: true,
    headers: {
        "Content-Type": "application/json",
    },
})

export default $api
