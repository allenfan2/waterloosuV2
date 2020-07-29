export const getAllPlayers = async (sort="pp_raw",by="-1", mode=0)=>{
    const query=`/api/v2/getInfo?sort=${sort}&by=${by}&mode=${mode}`
    //process.env["NODE_ENV"] == "DEV" && console.log(query)
    const response = await fetch(query)
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