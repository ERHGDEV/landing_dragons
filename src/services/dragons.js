import axios from "axios"

const API_URL = "https://dragons-api-ten.vercel.app/api/dragons"

const getAll = () => {
    const request = axios.get(API_URL)
    return request.then(response => {
        return response.data
    })
}

export default getAll 