import React from 'react';

const ChartItem = ({song, index}) => {
    
    return(
        <p>{index + 1}. {song.title.label} </p>
    )


}


export default ChartItem;