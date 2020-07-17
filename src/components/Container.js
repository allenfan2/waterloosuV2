import React,{useState,useEffect} from 'react'
import './styles/Container.scss'
import Cards from './Cards'
import {getAllPlayers} from '../api/apiCall'


export default function Container() {
    const [{success,data},setPlayers] = useState({success:false,data:[]})

    useEffect(()=>{
        getAllPlayers().then(
            data=>setPlayers(data)
        ).catch(
            err=>setPlayers({success:false,data:[]})
        )
    },[])

    return (
        <div className="container">
            {success ? data.map(p=><Cards {...p}/>): <h1>Nothing Here</h1>}
        </div>
    )
}
