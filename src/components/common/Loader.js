import React from 'react'

import LoadingIcon from '../../assets/loading.svg'
import './styles/Loader.scss'

export default function Loader({className="", borderRadius="0px"}) {
    return (
        <div className={`loader ${className}`} style={{borderRadius}}>
            <img src={LoadingIcon}  alt="Loading Icon"/>
        </div>
    )
}
