import { Api } from "@/services/api-clients";
import { useEffect, useState } from "react"
import { useSet } from "react-use";

export const useFilterIngredients = () => {
    const [ingredients, setIngredients] = useState([])
    const [loading, setLoading] = useState(false)

    const [selectedIds, {toggle}] = useSet(new Set<string>([]))
    useEffect(() => {
        async function fetchIngredients() {
            try {
                setLoading(true)
                const ingredients = await Api.ingredients.getAllIngredients()
                setIngredients(ingredients)
            } catch (error) {
                console.log(error);
            } finally{
                setLoading(false)
            }
        }

        fetchIngredients()
    }, [])

    return {ingredients, loading, selectedIds: Set<string>, onAddId: toggle}
}