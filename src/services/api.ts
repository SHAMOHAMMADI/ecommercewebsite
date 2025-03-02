import axios from 'axios'

const client = axios.create({
    baseURL:"http://localhost:5175"
})

export async function getProducts(){
    const {data} = await client("/data")
    return data;
}

export async function getProduct(id: string | number){
    const {data} = await client(`/data/${id}`)
    return data;
}

export async function login ( username : string , password : string ){
    const {data} = await client ({
        method: "POST",
        url:"/login",
        data: {
            username ,
            password
        }
    })

    return data;
}