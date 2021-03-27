import React from "react";
import { Bar } from "react-chartjs-2";
import ComparisonFilter from "./ComparisonFilter";
import { capitalizeSentence } from "./../../utility";

const ComparisonChart = ({ teamsToCompare, compareBy, allTeams, selectTeam, selectStat }) => {

    const datasets = teamsToCompare.map((team) => {

        const values = compareBy.map((column) => team[column] )

        return {
            label: team.team_name,
            data: values,
            backgroundColor: team.team_first_color
        }
    })

    const formattedLabels = compareBy.map((label) => capitalizeSentence(label, "_"));
    const data = {
        labels: formattedLabels,
        datasets: datasets,
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

    return (
        <>
            <ComparisonFilter
                allTeams={ allTeams }
                selectedTeams={ teamsToCompare }
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

export default ComparisonChart;
