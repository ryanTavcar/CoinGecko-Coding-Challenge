import React from 'react'
import { Line } from 'react-chartjs-2'

const LineChart = (props) => {
    const { coinHistory, currency } = props

    const coinPrice = []
    const coinTimestamp = []

    for (const item of coinHistory.prices) {
        coinTimestamp.push(new Date(item[0]).toLocaleDateString())
        coinPrice.push(item[1])
    }

    const data = {
        labels: coinTimestamp,
        datasets: [
            {
                label: `Price In ${currency.toUpperCase()}`,
                data: coinPrice,
                fill: 'false',
                borderColor: '#0071bd',
                borderWidth: 5,
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
