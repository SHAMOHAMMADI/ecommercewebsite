import axios from 'axios'

const client = axios.create({
    baseURL:"http://localhost:5174"
})

export async function getProducts(){
    const {data} = await client("/data")
    return data;
}

export async function getProduct(id: string | number){
    const {data} = await client(`/data/${id}`)
    return data;
}