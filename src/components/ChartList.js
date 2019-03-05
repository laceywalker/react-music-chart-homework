import React from 'react';
import ChartItem from "./ChartItem";


const ChartList = ({songs}) => {

    const chartItems = songs.map((song, index) => {
        // return <p key={index}>{index + 1}. {song.title.label} </p>
        return <ChartItem key ={index} index = {index} song = {song}/>
    })

    return (
        <div>{chartItems}</div>
    )
}




export default ChartList;