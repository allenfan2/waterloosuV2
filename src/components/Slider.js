import React, { useEffect } from 'react'
import "./styles/Slider.scss"
import { connect } from 'react-redux'

import {
    closeOverlay,
    fetchStats,
    changeDate,
    fetchPlayerInfo,
    changePlayer
} from '../store/actions'

import Stats from './Stats'


const mapStateToProps = state => ({

    selectedPlayer: state.selectedPlayer,
    players: state.players,
    statsLoaded: state.statsLoaded,
    from: state.from,
    to: state.to,
    playerInfo: state.playerInfo
})

const mapDispatchToProps = {
    closeOverlay,
    fetchStats,
    changeDate,
    fetchPlayerInfo,
    changePlayer
}


const CloseButton = ({ onClick }) => (
    <svg className="slider__close" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" enableBackground="new 0 0 40 40" onClick={onClick}>
        <line x1="15" y1="15" x2="25" y2="25" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeMiterlimit="10"></line>
        <line x1="25" y1="15" x2="15" y2="25" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeMiterlimit="10"></line>
        <circle className="circle" cx="20" cy="20" r="19" opacity="0" stroke="#000" strokeWidth="2.5" strokeLinecap="round" strokeMiterlimit="10" fill="none"></circle>
        <path d="M20 1c10.45 0 19 8.55 19 19s-8.55 19-19 19-19-8.55-19-19 8.55-19 19-19z" className="progress" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeMiterlimit="10" fill="none"></path>
    </svg>
)

const LeftArrow = ({ onClick }) => (
    <button class="arrow left" onClick={onClick}>
        <svg width="60px" height="80px" viewBox="0 0 50 80" xmlSpace="preserve">
            <polyline fill="none" stroke="#FFFFFF" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" points="45.63,75.8 0.375,38.087 45.63,0.375 " />
        </svg>
    </button>
)

const RightArrow = ({ onClick }) => (
    <button class="arrow right" onClick={onClick}>
        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="60px" height="80px" viewBox="0 0 50 80" xmlSpace="preserve">
        <polyline fill="none" stroke="#FFFFFF" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" points="0.375,0.375 45.63,38.087 0.375,75.8 " />
        </svg>
</button >
)




function Slider(props) {
    const {
        selectedPlayer,
        players,
        from,
        to,
        closeOverlay,
        fetchStats,
        changeDate,
        fetchPlayerInfo,
        playerInfo,
        changePlayer
    } = props

    const { username = "" } = playerInfo
    const playerID = selectedPlayer != null ? players[selectedPlayer].id : 0

    useEffect(() => {
        if (selectedPlayer != null) {
            fetchStats(playerID, from, to)
        }
    }, [selectedPlayer, from, to])

    useEffect(() => {
        if (selectedPlayer != null) {
            fetchPlayerInfo(playerID)
        }
    }, [selectedPlayer])

    const changeDateWrapper = event => {
        const { name, value } = event.target
        changeDate(value, name)
    }

    return (
        <div className={`slider ${(selectedPlayer != null) ? "slider--active" : ""}`}>
            <div className="slider__body">
                <div className="slider__title">
                    <LeftArrow onClick={()=>{changePlayer("prev")}}/>
                    <h1>Player: {username} (id:{playerID})</h1>
                    <RightArrow onClick={()=>{changePlayer("next")}}/>
                </div>
                <div className="slider__time-selector">
                    <span>From:</span>
                    <input type="date" name="from" value={from} onChange={changeDateWrapper}></input>
                    <span>To:</span>
                    <input type="date" name="to" value={to} onChange={changeDateWrapper}></input>
                </div>
                <Stats />
            </div>
            <CloseButton onClick={closeOverlay} />
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Slider)
