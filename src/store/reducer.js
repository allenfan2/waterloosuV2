import {
    SELECT_PLAYER,
    CLOSE_OVERLAY,
    FETCHING_PLAYERS,
    LOAD_PLAYERS,
    CHANGE_DATE,
    FETCHING_STATS,
    LOAD_STATS,
    FETCHING_PLAYER_INFO,
    LOAD_PLAYER_INFO
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
    switch(action.type){
        case SELECT_PLAYER:
            return {...state, selectedPlayer: action.payload}
        case CLOSE_OVERLAY:
            return {...state,
                selectedPlayer: null,
                playerInfo:{},
                playerInfoLoaded: false,
                stats:[],
                statsLoaded: false
            }
        case LOAD_PLAYERS:
            return {...state, players: action.payload, playersLoaded: true}
        case FETCHING_PLAYERS:
            return {...state, playersLoaded: false}
        case CHANGE_DATE:
            return {...state, [action.field]:action.payload}
        case FETCHING_STATS:
            return {...state, statsLoaded:false}
        case LOAD_STATS:
            return {...state, stats: action.payload, statsLoaded:true}
        case FETCHING_PLAYER_INFO:
            return {...state, playerInfoLoaded: false}
        case LOAD_PLAYER_INFO:
            return {...state, playerInfo: action.payload}
        default:
            return state
    }
}

export default reducer;