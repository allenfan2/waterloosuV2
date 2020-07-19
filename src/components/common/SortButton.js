import React from 'react'

import SortUp from '../../assets/sort-up.svg'
import SortDown from '../../assets/sort-down.svg'
import {connect} from 'react-redux'
import './styles/SortButton.scss'
import {sortPlayers} from '../../store/actions'

const mapStateToProps = state=>({
    sortInfo: state.sortInfo
})

const mapDispatchToProps = {
    sortPlayers
}

function SortButton(props) {
    const {
        children,
        name,
        sortInfo,
        sortPlayers
    } = props;

    const {sort,by} = sortInfo

    return (
        <button className="sort-button" name={name}  onClick={(e)=>{sortPlayers(e.target.name)}}>
            {children} {sort == name && <img src={by == 1? SortUp : SortDown} width="10px"/>}
        </button>
    )
}

export default connect(mapStateToProps,mapDispatchToProps)(SortButton)