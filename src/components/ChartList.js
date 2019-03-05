import React from 'react';
import ChartItem from "./ChartItem";


const ChartList = (props) => {

    const songList = props.songs.map((song, index) => {
        // return <p key={index}>{index + 1}. {song.title.label} </p>
        return <ChartItem key ={index} index = {index} song = {song}/>
    })

    return (
        <div>{songList}</div>
    )
}




export default ChartList;