import React, { useEffect } from 'react'
import Container from './Container'
import './styles/App.scss'
import Slider from './Slider'
import { connect } from 'react-redux'
import { fetchPlayers } from '../store/actions'
import SortButton from './common/SortButton'
import Logo from '../assets/logo.png'

const mapStateToProps =state=> ({
    sortInfo: state.sortInfo
})

const mapDispatchToProps = {
    fetchPlayers
}

const App = props => {
    const {sortInfo} = props;

    useEffect(() => {
        fetchPlayers(sortInfo)
    }, [sortInfo])

    const {
        fetchPlayers
    } = props


    return (
        <div className="App">
            <div className="header">
                Stat<img src={Logo}/>Tracker
                </div>
            <div className="query">
                <div className="sort-buttons">
                    <SortButton name="pp_raw">Global Rank/PP</SortButton>
                    <SortButton name="playcount">Playcount</SortButton>
                    <SortButton name="join_date">Join Date</SortButton>
                </div>
            </div>
            <Container />
            <div className="footer">
                WaterloosuV2
            </div>
            <Slider />
        </div>
    )
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)
