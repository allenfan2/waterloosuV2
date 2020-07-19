import React from 'react'
import './styles/Stats.scss'
import { connect } from 'react-redux'
import LineChart from './charts/LineChart'
import Loader from './common/Loader'
import Icon_A from '../assets/a.png'
import Icon_S from '../assets/s.png'
import Icon_SH from '../assets/sh.png'
import Icon_SS from '../assets/ss.png'
import Icon_SSH from '../assets/ssh.png'


const mapStateToProps = state => ({
    stats: state.stats,
    statsLoaded: state.statsLoaded,
    playerInfo: state.playerInfo,
    playerInfoLoaded: state.playerInfoLoaded
})



function Stats(props) {
    const {
        stats,
        statsLoaded,
        playerInfo,
        playerInfoLoaded
    } = props

    const {
        user_id,
        join_date,
        count300,
        count100,
        count50,
        playcount,
        ranked_score,
        total_score,
        pp_rank,
        level,
        pp_raw,
        accuracy,
        count_rank_ss,
        count_rank_ssh,
        count_rank_s,
        count_rank_a,
        count_rank_sh,
        country,
        total_seconds_played,
        pp_country_rank
    } = playerInfo

    const dateArray = stats.map(x => x.date.split("T")[0])
    const convData = (field, dlabel = "default", borderColor = "#cc9900", backgroundColor = "hsla(45, 100%, 40%, 0.25)") => ({
        labels: dateArray,
        datasets: [{
            label: dlabel,
            data: stats.map(x => x[field]),
            borderColor,
            backgroundColor,
            borderWidth: 2,
            pointRadius: 2,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: borderColor
        }]
    })


    return (
        <div className="stats">
            <div className="stats__info">
                <div className="stats__ava-container">
                    <img className="stats__avatar" src={`https://a.ppy.sh/${user_id}`} alt="Photo not found"></img></div>
                <div className="num-stats">
                    <div className="num-stats--stats">PP: {pp_raw}</div>
                    <div className="num-stats--stats">Rank: {pp_rank}</div>
                    <div className="num-stats--stats">Country Rank: {pp_country_rank}</div>
                    <div className="num-stats--stats">Accuracy: {parseFloat(accuracy).toFixed(2)}%</div>
                    <div className="num-stats--stats">Play Count: {playcount}</div>
                    <div className="num-stats--stats">Ranked Score: {ranked_score}</div>
                </div>
                <div className="fc-stats">
                    <img class="fc-stats__icons" src={Icon_A} alt='A Icon'/>
                    <img class="fc-stats__icons" src={Icon_S} alt='S'/>
                    <img class="fc-stats__icons" src={Icon_SH} alt='SH'/>
                    <img class="fc-stats__icons" src={Icon_SS} alt='SS'/>
                    <img class="fc-stats__icons" src={Icon_SSH} alt='SSH'/>
                </div>
            </div>
            <div className="stats__graph">
                {!statsLoaded && <Loader className="loader__medium" />}
                <LineChart data={convData("pp_raw", "Preformance Points")} />
                <LineChart data={convData("pp_rank", "Global Rank")} />
            </div>
        </div>
    )
}

export default connect(mapStateToProps, null)(Stats)