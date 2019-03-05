import React from 'react';

const ChartList = (props) => {

    const songList = props.songs.map((song, index) => {
        return <p key={index}>{index + 1}. {song.title.label} </p>
    })

    return (
        <div>{songList}</div>
    )
}




export default ChartList;