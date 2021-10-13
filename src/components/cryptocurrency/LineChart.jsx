import React from 'react'
import { Line } from 'react-chartjs-2'

const LineChart = (props) => {
    const { coinHistory, currentPrice, coinName } = props
    const coinPrice = []
    const coinTimestamp = []

    for (const item of coinHistory.prices) {
        coinTimestamp.push(item[0])
        coinPrice.push(item[1])
    }

    const data = {
        labels: coinTimestamp,
        datasets: [
            {
                label: 'Price In AUD',
                data: coinPrice,
                fill: false,
                backgroundColor: '#0071bd',
                borderColor: '#0071bd',
            },
        ],
    }

    const options = {
        scales: {
            yAxes: [
                {
                    ticks: {
                        beginAtZero: true,
                    },
                },
            ],
        },
    }

    return <Line data={data} options={options} />
}

export default LineChart
