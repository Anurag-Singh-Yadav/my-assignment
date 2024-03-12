import axios from "axios"

export const checkout = async()=>{
    try{
        const response = await axios.get(`${process.env.NEXT_PUBLIC_CHECKOUT}`)
        return response.data
    }catch(err){
        return err;
    }
}