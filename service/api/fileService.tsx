import axios from "axios"
import { BASE_URL } from "../sockets/config"

export const uploadFile = async (data:any) => {
    try {
        const formData = new FormData() as any 
        formData?.append('image',{
            uri: data?.uri,
            name: data?.name,
            type: data?.type,
        })
        const response  = await axios.post(`${BASE_URL}/file/upload`,formData,{
            headers:{
                'Content-Type':'multipart/form-data'
            }
        })
        return response.data?.mediaUrl
    } catch (error) {
        console.log(error);
        return null;
    }
}