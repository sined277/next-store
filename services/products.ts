import { ApiRoutes } from "./constants"
import { axiosInstance } from "./instance"

export const search = async (query: string) => {
    const { data } = await axiosInstance.get<any>(ApiRoutes.SEARCH_PRODUCTS, {params: {query}})
    
    return data
}