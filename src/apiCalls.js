export const getAllRooms = async (id) => {
  const response = await fetch(`https://untangled-be.herokuapp.com/api/v1/users/${id}/rooms`)
  return await response.json();
}
export const getRoom = async (id) => {
  const response = await fetch(`https://untangled-be.herokuapp.com/api/v1/rooms/${id}`)
  return await response.json();
} 
export const getUser = async (id) => {
  const response = await fetch(`https://untangled-be.herokuapp.com/api/v1/users/${id}`)
  return await response.json();
}
export const getMemories = async (id) => {
  const response = await fetch(`https://untangled-be.herokuapp.com/api/v1/rooms/${id}/memories`)
  return await response.json();
}