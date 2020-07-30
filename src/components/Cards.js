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
        selectPlayer,
    } = props
    return ( //onClick={()=>{alert("Hit")}}
        <div className="card">
            <div className="card__ranking">{index + 1}</div>
            <div className="card__info">
                <h1 className="card__info__username">{username}</h1>
                <div className="card__avatar" onClick={() => { selectPlayer(index) }}>
                    <img className="card__avatar--image" src={`https://a.ppy.sh/${id}`} alt="Photo not found" ></img>
                    <div className="card__avatar--overlay">
                        <img src={StatsIcon} />
                        <div>View Stats</div>
                    </div>
                </div>
                <div className="card__info__stats">
                    <p>Performance Points: <span>{pp_raw}</span></p>
                    <p>Level: <span>{level}</span></p>
                    <p>Playcount: <span>{playcount}</span></p>
                    <p>Join Date: <span>{join_date.split("T")[0]}</span></p>
                </div>
            </div>
        </div>
    )
}

export default connect(null, mapDispatchToProps)(Cards)