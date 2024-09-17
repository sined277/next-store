import { ApiRoutes } from "./constants"
import { axiosInstance } from "./instance"

export const getAllIngredients = async () => {
    const { data } = await axiosInstance.get(ApiRoutes.SEARCH_INGREDIENTS)
    
    return data
}