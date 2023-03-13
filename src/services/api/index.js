import axios from 'axios'
axios.defaults.baseURL = "http://localhost:8080";

const fetchAllProducts = async()=>{

    const res = await axios.get('/items')
    return res
}

const createOrder=async(body)=>{
    const res = await axios.post('/orders',body)
    console.log(res)
    return res
}




export {
    fetchAllProducts,
    createOrder
}
