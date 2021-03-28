import React from "react";
import PropTypes from "prop-types";
import { Bar } from "react-chartjs-2";
import ComparisonFilter from "./ComparisonFilter";
import { capitalizeSentence } from "./../../utility";

const ComparisonChart = ({ teamsToCompare, compareBy, allTeams, selectTeam, selectStat }) => {

    // format the chart's labels and data
    const formattedLabels = compareBy.map((label) => capitalizeSentence(label, "_"));

    const datasets = teamsToCompare.map((team) => {

        const values = compareBy.map((column) => team[column] )

        return {
            label: team.team_name,
            data: values,
            backgroundColor: team.team_first_color
        }
    })

    const data = {
        labels: formattedLabels,
        datasets: datasets,
    }
    

    // Chart Customization
    const options = {
        legend: {
            labels: {
                fontColor: "white",
            }
        },
        scales: {
            yAxes: [
                {
                    ticks: {
                        fontColor: "white",
                        beginAtZero: true,
                    },
                },
            ],
            xAxes: [
                {
                    ticks: {
                        fontColor: "white",
                    }
                }
            ]
        },
    }

    return (
        <>
            <h2>{"Compare Teams"}</h2>
            <ComparisonFilter
                allTeams={ allTeams }
                selectedTeams={ teamsToCompare }
                selectedStats={ compareBy }
                selectTeam={ selectTeam }
                selectStat={ selectStat }
            />
            <Bar
                data={data}
                options={ options }
            />
        </>
    )
}

ComparisonChart.propTypes = {
    teamsToCompare: PropTypes.array.isRequired,
    compareBy: PropTypes.array.isRequired,
    allTeams: PropTypes.array.isRequired,
    selectTeam: PropTypes.func.isRequired,
    selectStat: PropTypes.func.isRequired
}

export default ComparisonChart;
