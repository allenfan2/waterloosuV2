import React from 'react'
import { Line } from 'react-chartjs-2'
import './styles.scss'

export default function LineChart(props) {
    const {
        data,
        options = {
            scales: {
                xAxes: [{
                    ticks: {
                        maxTicksLimit: 8,
                        minRotation: 0,
                        maxRotation: 0
                    }
                }
                ]
            }
        }
    } = props

    return (
        <div className="chart chart--line">
            <Line data={data} options={options} />
        </div>
    )
}
