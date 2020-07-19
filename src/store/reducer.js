import {
    SELECT_PLAYER,
    CLOSE_OVERLAY,
    FETCHING_PLAYERS,
    LOAD_PLAYERS,
    CHANGE_DATE,
    FETCHING_STATS,
    LOAD_STATS,
    FETCHING_PLAYER_INFO,
    LOAD_PLAYER_INFO,
    CHANGE_PLAYER
} from './actions'

const monthAgo=()=>{
    var d = new Date()
    d.setDate(d.getDate()-30)
    return d.toISOString().split("T")[0]
}

const defaultFromDate = monthAgo()
const defaultToDate= new Date().toISOString().split("T")[0]


const defaultState = {
    selectedPlayer: null,
    players: [],
    playersLoaded: false,
    playerInfo: {},
    playerInfoLoaded: false,
    stats: [],
    statsLoaded: false,
    from: defaultFromDate,
    to: defaultToDate,
}

function reducer(state=defaultState, action){
    const {type,payload} = action
    switch(type){
        case SELECT_PLAYER:
            return {...state, selectedPlayer: payload}
        case CLOSE_OVERLAY:
            return {...state,
                selectedPlayer: null,
                playerInfo:{},
                playerInfoLoaded: false,
                stats:[],
                statsLoaded: false
            }
        case LOAD_PLAYERS:
            return {...state, players: payload, playersLoaded: true}
        case FETCHING_PLAYERS:
            return {...state, playersLoaded: false}
        case CHANGE_DATE:
            return {...state, [action.field]:payload}
        case FETCHING_STATS:
            return {...state, statsLoaded:false}
        case LOAD_STATS:
            return {...state, stats: payload, statsLoaded:true}
        case FETCHING_PLAYER_INFO:
            return {...state, playerInfoLoaded: false}
        case LOAD_PLAYER_INFO:
            return {...state, playerInfo: payload, playerInfoLoaded: true}
        case CHANGE_PLAYER:
            const totalPlayers = state.players.length
            switch(payload){
                case "prev":
                    if(state.selectedPlayer == 0){
                        return {...state, selectedPlayer: totalPlayers-1}
                    }
                    return {...state, selectedPlayer: state.selectedPlayer-1}
                case "next":
                    if(state.selectedPlayer == totalPlayers-1){
                        return {...state, selectedPlayer: 0}
                    }
                    return {...state, selectedPlayer: state.selectedPlayer+1}
                default:
                    return state
            }
        default:
            return state
    }
}

export default reducer;