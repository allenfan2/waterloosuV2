import React, {useEffect} from 'react'
import Container from './Container'
import './styles/App.scss'
import Slider from './Slider'
import { connect } from 'react-redux'
import {fetchPlayers} from '../store/actions'

const mapStateToProps=(state)=>({
    selectedPlayer: state.selectedPlayer
})

const mapDispatchToProps={
    fetchPlayers
}

const App = props => {
    useEffect(() => {
        fetchPlayers()
    }, [])

    const {
        selectedPlayer,
        fetchPlayers
    } = props


    return (
        <div className="App">
                <div className="header">
                    <h1>Waterloosu V2</h1>
                </div>
            <Container/>
            <div className="footer">
                WaterloosuV2
            </div>
            <Slider targetPlayer={selectedPlayer}/>
        </div>
    )
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
    )(App)
