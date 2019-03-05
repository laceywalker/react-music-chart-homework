import React, {Component} from 'react';

const ChartList = (props) => {
    console.log("ChartList props:", props);
    const songList = props.songs.map((song, index) => {
        return <p key={index}>{song.title.label}</p>
    })

    return (
        <div>{songList}</div>
    )
}




export default ChartList;