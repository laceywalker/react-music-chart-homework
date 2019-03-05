import React from 'react';

const GenreSelector = ({songs}) => {
    const options = songs.map((song, index) => {
        return <option value={index} key={index}>{song.category.attributes.term}</option>
    })

    function handleChange(e){
        songs.onGenreSelected(e.target.value)
    }

    return (
        <select onChange={handleChange} defaultValue="default">
        <option disabled value = "default">Choose a Genre</option>
        {options}  
        </select>
    )

}

export default GenreSelector;