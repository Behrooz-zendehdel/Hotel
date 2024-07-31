import axios from "axios"

const app = axios.create ({
    baseURL: "https//localhost:5000/api",
    withCredentials: true
})


const http ={
    get:app.post,
    post:app.post,
    put:app.put,
    delete:app.delete,
    patch:app.patch
}

export default http;