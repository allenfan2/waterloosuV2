export const getAllPlayers = async ()=>{
    const response = await fetch("/api/getInfo")
    let data = await response.json()
    return data
}