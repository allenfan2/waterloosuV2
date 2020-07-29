import {
    getAllPlayers,
    getStats,
    getPlayerInfo
} from '../api/apiCall'

export const CLOSE_OVERLAY = "CLOSE_OVERLAY"

export const closeOverlay = () => ({
    type: CLOSE_OVERLAY
})

export const SELECT_PLAYER = "SELECT_PLAYER"

export const selectPlayer = (payload) => ({
    type: SELECT_PLAYER,
    payload
})

export const FETCHING_PLAYERS = "FETCHING_PLAYERS"
const fetchingPlayers = () => ({
    type: FETCHING_PLAYERS
})

export const LOAD_PLAYERS = "LOAD_PLAYERS"
const loadPlayers = (payload) => {
    return { type: LOAD_PLAYERS, payload }
}

export const fetchPlayers = (sortParam = {sort:"pp_raw",by :-1 }, mode=0) => {
    const {sort,by} = sortParam
    return dispatch => {
        dispatch(fetchingPlayers())
        getAllPlayers(sort,by,mode).then(
            data => {
                dispatch(loadHandler(data, loadPlayers, []))
            }
        ).catch(err => {

        })
    }
}

// CHANGE_DATE

export const CHANGE_DATE = "CHANGE_DATE"

export const changeDate = (date, field) => (
    {
        type: CHANGE_DATE,
        payload: date,
        field
    }
)

const loadHandler = (payload, loadFn, defaultVal = null) => {
    const { data, success } = payload
    return loadFn(success ? data : defaultVal)
}


//

export const FETCHING_PLAYER_INFO = "FETCHING_PLAYER_INFO"
const fetchingPlayerInfo = () => (
    { type: FETCHING_PLAYER_INFO }
)

export const fetchPlayerInfo = (id) => {
    return dispatch => {
        dispatch(fetchingPlayerInfo())
        getPlayerInfo(id).then(
            (data) => dispatch(loadHandler(data,loadPlayerInfo,{}))
        ).catch(err => {
            console.log(err)
        })
    }
}

export const LOAD_PLAYER_INFO = "LOAD_PLAYER_INFO"

const loadPlayerInfo = (payload) => ({
    type: LOAD_PLAYER_INFO,
    payload
})



// LOAD STATS

export const FETCHING_STATS = "FETCHING_STATS"

const fetchingStats = () => ({
    type: FETCHING_STATS
})


export const fetchStats = (id, from, to) => {
    return dispatch => {
        dispatch(fetchingStats())
        getStats(id, from, to).then(
            data => dispatch(loadHandler(data, loadStats, []))
        ).catch(e => {
            // 
        })
    }
}

export const LOAD_STATS = "LOAD_STATS"
const loadStats = (payload) => ({
    type: LOAD_STATS,
    payload
})


//

// CHANGE PLAYERS

export const CHANGE_PLAYER = "CHANGE_PLAYER"

export const changePlayer=(direction)=>({type: CHANGE_PLAYER, payload: direction})

// 

// SORT

export const SORT_PLAYERS = "SORT_PLAYERS "

export const sortPlayers=(field)=>({
    type: SORT_PLAYERS,
    payload: field
})

//
export const CHANGE_MODE = "CHANGE_MODE"

export const changeMode=(payload)=>({
    type: CHANGE_MODE,
    payload
})