import React from 'react'
import './styles/Cards.scss'
import { connect } from 'react-redux'
import { selectPlayer } from '../store/actions'
import StatsIcon from '../assets/graph.svg'

const mapDispatchToProps = {
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
        pp_rank,
        selectPlayer,
    } = props
    return ( //onClick={()=>{alert("Hit")}}
        <div className="card">
            <div className="card__ranking">{index + 1}</div>
            <div className="card__info">
                <h1 className="card__info__username">{username}</h1>
                <h3 className="card__info--rank">Global Rank (#{pp_rank})</h3>
                <div className="card__avatar" onClick={() => { selectPlayer(index) }}>
                    <img className="card__avatar--image" src={`https://a.ppy.sh/${id}`} alt="Photo not found" ></img>
                    <div className="card__avatar--overlay">
                        <img src={StatsIcon} />
                        <div>View Stats</div>
                    </div>
                </div>
                <div className="card__info__stats">
                    <div><p className="slabel">Performance Points: </p><p className="sval">{pp_raw}</p></div>
                    <div><p className="slabel">Level: </p><p className="sval">{level}</p></div>
                    <div><p className="slabel">Playcount: </p><p className="sval">{playcount}</p></div>
                    <div><p className="slabel">Join Date: </p><p className="sval">{join_date.split("T")[0]}</p></div>
                </div>
            </div>
        </div>
    )
}

export default connect(null, mapDispatchToProps)(Cards)