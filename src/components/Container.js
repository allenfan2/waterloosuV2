import React,{useState,useEffect} from 'react'
import './styles/Container.scss'
import Cards from './Cards'
import {connect} from 'react-redux'
import Loader from './common/Loader'


const mapStateToProps=state=>({
    players: state.players,
    playersLoaded: state.playersLoaded
})

function Container(props) {
    const {
        players,
        playersLoaded
    } = props

    return (
        <div className="container">
            {!playersLoaded && <Loader/>}
            {players.map((p,i)=><Cards {...p} index={i}/>)}
        </div>
    )
}

export default connect(mapStateToProps,null)(Container)