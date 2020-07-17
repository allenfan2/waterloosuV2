import React from 'react'
import './styles/Cards.scss'


export default function Cards(props) {
    const {
        id,
        username,
        join_date,
        playcount,
        level,
        pp_raw,
    } = props
    return ( //onClick={()=>{alert("Hit")}}
        <div className="card">  
            <img className="card__avatar" src={`https://a.ppy.sh/${id}`} alt="Photo not found"></img>
            <div className="card__info">
                <h1 className="card__info__username">{username}</h1>
                <p>Preformance Points: {pp_raw}</p>
                <p>Level: {level}</p>
                <p>Playcount: {playcount}</p>
                <p>Join Date: {join_date.split("T")[0]}</p>
            </div>
        </div>
    )
}
