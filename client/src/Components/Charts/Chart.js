import React from 'react'
import Charts from 'react-apexcharts'
import { useSelector } from 'react-redux';
import './style.scss'

const Chart = () => {
    const state = useSelector(state => state.userinfo.userInfo);
    const students = state?.filter(data => data.profession === "Student").map(data => data.time_slot)
    const jobHolder = state?.filter(data => data.profession === "Job Holder").map(data => data.time_slot)
    const business = state?.filter(data => data.profession === "Business").map(data => data.time_slot)

    // Chart Settings
    const settings = {
        options: {
            stroke: {
                curve: 'smooth',
            },
            chart: {
                id: "weather_data"
            },
            yaixs: [
                { seriesName: "Students" },
                { seriesName: "Job Holder" },
                { seriesName: "Business" },
            ]
        },
        series: [
            {
                name: "Students",
                data: students
            },
            {
                name: "Job Holder",
                data: jobHolder
            },
            {
                name: "Business",
                data: business
            },

        ]
    }
    return (
        <div className="chart">
            {
                state ? <Charts
                    options={settings.options}
                    series={settings.series}
                    type="line"

                />
                    : <p>Loading Chart...</p>
            }
        </div>
    )
}

export default Chart
