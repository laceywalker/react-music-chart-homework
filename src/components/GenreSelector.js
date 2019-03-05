import React from 'react';

const GenreSelector = ({songs, onGenreSelected}) => {
    const options = songs.map((song, index) => {
        return <option value={index} key={index}>{song.category.attributes.term}</option>
    })

    function handleChange(event){
        onGenreSelected(event.target.value)
    }

    return (
        <select onChange={handleChange} defaultValue="default">
        <option disabled value = "default">Choose a Genre</option>
        {options}  
        </select>
    )

}

export default GenreSelector;