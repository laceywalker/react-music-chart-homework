import React from 'react';

const ChartItem = (props) => {

    return(
        <p>{props.index + 1}. {props.song.title.label} </p>
    )


}


export default ChartItem;