import React from 'react'
import Container from './Container'
import './styles/App.scss'

export default function App() {
    return (
        <div className="App">
            <div className="header">
                <h1>Waterloosu V2</h1>
            </div>
            <Container/>
            <div className="footer">
                Made with React
            </div>
        </div>
    )
}
