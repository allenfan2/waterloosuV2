import React, { useEffect } from 'react'
import Container from './Container'
import './styles/App.scss'
import Slider from './Slider'
import { connect } from 'react-redux'
import { fetchPlayers, changeMode } from '../store/actions'
import SortButton from './common/SortButton'
import Logo from '../assets/logo.png'

const mapStateToProps =state=> ({
    sortInfo: state.sortInfo,
    mode: state.mode
})

const mapDispatchToProps = {
    fetchPlayers,
    changeMode
}

const App = props => {
    const {
        sortInfo,
        mode,
        fetchPlayers,
        changeMode
    } = props;

    useEffect(() => {
        fetchPlayers(sortInfo,mode)
    }, [sortInfo,mode])



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
                <div>
                    <button className={`button ${mode==0 && "button--selected"}`} onClick={()=>{changeMode(0)}}>osu!</button>
                    <button className={`button ${mode==1 && "button--selected"}` } onClick={()=>{changeMode(1)}}>Taiko</button>
                    <button className={`button ${mode==3 && "button--selected"}`} onClick={()=>{changeMode(3)}}>Mania</button>
                    <button className={`button ${mode==2 && "button--selected"}`} onClick={()=>{changeMode(2)}}>CTB</button>
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
