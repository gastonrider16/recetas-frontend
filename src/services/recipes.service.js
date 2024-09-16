import { baseUrl } from "../constants"

export const getRecipes = async () => {
  const response = await fetch(baseUrl + "/recetas")
  const data = await response.json()

  return data
}