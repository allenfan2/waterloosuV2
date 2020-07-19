import React, { useEffect } from 'react'
import "./styles/Slider.scss"
import { connect } from 'react-redux'

import {
    closeOverlay,
    fetchStats,
    changeDate,
    fetchPlayerInfo
} from '../store/actions'

import Stats from './Stats'


const mapStateToProps = state => ({
    selectedPlayer: state.selectedPlayer,
    statsLoaded: state.statsLoaded,
    from: state.from,
    to: state.to,
    playerInfo: state.playerInfo
})

const mapDispatchToProps = {
    closeOverlay,
    fetchStats,
    changeDate,
    fetchPlayerInfo
}


const CloseButton = ({ onClick }) => (
    <svg className="slider__close" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" enableBackground="new 0 0 40 40" onClick={onClick}>
        <line x1="15" y1="15" x2="25" y2="25" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeMiterlimit="10"></line>
        <line x1="25" y1="15" x2="15" y2="25" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeMiterlimit="10"></line>
        <circle className="circle" cx="20" cy="20" r="19" opacity="0" stroke="#000" strokeWidth="2.5" strokeLinecap="round" strokeMiterlimit="10" fill="none"></circle>
        <path d="M20 1c10.45 0 19 8.55 19 19s-8.55 19-19 19-19-8.55-19-19 8.55-19 19-19z" className="progress" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeMiterlimit="10" fill="none"></path>
    </svg>
)

function Slider(props) {
    const {
        targetPlayer,
        from,
        to,
        closeOverlay,
        fetchStats,
        changeDate,
        fetchPlayerInfo,
        playerInfo
    } = props

    const {username=""} = playerInfo

    useEffect(() => {
        if (targetPlayer != null) {
            fetchStats(targetPlayer, from, to)
        }
    }, [targetPlayer, from, to])

    useEffect(() => {
        if (targetPlayer != null) {
            fetchPlayerInfo(targetPlayer)
        }
    }, [targetPlayer])

    const changeDateWrapper = event => {
        const { name, value } = event.target
        changeDate(value, name)
    }

    return (
        <div className={`slider ${(targetPlayer != null) ? "slider--active" : ""}`}>
            <div className="slider__body">
                <div className="slider__title">
                    <h1>Player: {username} (id: {targetPlayer})</h1>
                </div>
                <div>
                    <span>From: </span>
                    <input type="date" name="from" value={from} onChange={changeDateWrapper}></input>
                    <span>To: </span>
                    <input type="date" name="to" value={to} onChange={changeDateWrapper}></input>
                </div>
                <Stats />
            </div>
            <CloseButton onClick={closeOverlay} />
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Slider)
