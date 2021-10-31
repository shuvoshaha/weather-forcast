import React from 'react'
import Charts from 'react-apexcharts'
import { useSelector } from 'react-redux';
import './style.scss'

const Chart = () => {
    const state = useSelector(state => state.temp.daily);
    const min_temp = state?.map(data => data.temp.min)
    const max_temp = state?.map(data => data.temp.max)


    const settings = {
        options: {
            chart: {
                id: "weather_data"
            }, 
            xaixs: {
                categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
            }
        }, 
        series: [
            {
                name: "Min Temp",
                data: min_temp
            },
            {
                name: "Max Temp",
                data: max_temp
            }
        ]
    }
    return (
        <div className="chart">
            <Charts
                options={settings.options}
                series={settings.series}
                type="bar"
                
            />
        </div>
    )
}

export default Chart
