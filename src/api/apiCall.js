export const getAllPlayers = async ()=>{
    const response = await fetch("/api/getInfo")
    let data = await response.json()
    return data
}

export const getStats = async(id, from, to=null)=>{
    const request = `/api/getAllInfo/${id}?from=${from}${to ? `&to=${to}`:""}`
  //  console.log(request)
    const response = await fetch(request)
    const data = await response.json()
    return data
}

export const getPlayerInfo = async(id)=>{
    const response = await fetch(`/api/player/${id}`)
    const data = await response.json()
    return data
}