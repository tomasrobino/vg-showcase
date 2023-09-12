"use client"

import { Pie } from "react-chartjs-2"
import { ArcElement, Chart } from "chart.js"

export default function PieChart(props: {data: Array<number>}) {
    Chart.register(ArcElement)

    const data = {
        labels: ["Exceptional", "Recommended", "Meh", "Skip"],
        datasets: [{
            label: "Ratings",
            data: props.data,
            backgroundColor: [
                'green',
                'blue',
                "orange",
                "red"
            ],
            borderWidth: 1,
            hoverOffset: 3
        }]
    }

    return(
        <Pie data={data}/>
    )
    
}