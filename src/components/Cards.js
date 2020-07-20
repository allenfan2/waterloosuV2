import React from 'react'
import './styles/Cards.scss'
import {connect} from 'react-redux'
import {selectPlayer} from '../store/actions'

const mapDispatchToProps ={
    selectPlayer
}

function Cards(props) {
    const {
        id,
        index,
        username,
        join_date,
        playcount,
        level,
        pp_raw,
        selectPlayer,
    } = props
    return ( //onClick={()=>{alert("Hit")}}
        <div className="card">  
            <div className="card__ranking">{index+1}</div>
            <img className="card__avatar" src={`https://a.ppy.sh/${id}`} alt="Photo not found"></img>
            <div className="card__info">
                <h1 className="card__info__username">{username}</h1>
                <p>Performance Points: {pp_raw}</p>
                <p>Level: {level}</p>
                <p>Playcount: {playcount}</p>
                <p>Join Date: {join_date.split("T")[0]}</p>
                <a onClick={()=>{selectPlayer(index)}}>Detailed Stats</a>
            </div>
        </div>
    )
}

export default connect(null,mapDispatchToProps)(Cards)