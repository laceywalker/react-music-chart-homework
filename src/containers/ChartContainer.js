import React, {Component} from "react";
import ChartList from "../components/ChartList";
import GenreSelector from "../components/GenreSelector";

class ChartContainer extends Component{
    constructor(props){         
        // why do I put props in when it is just an empty object? what is it inheriting from Component?
        super(props);
        this.state = {
            songs: [],
            currentGenre: null
        }
        this.handleGenreSelected = this.handleGenreSelected.bind(this)
    }

    componentDidMount(){
        const url = "https://itunes.apple.com/gb/rss/topsongs/limit=20/json"
        fetch(url)
        .then(res => res.json())
        .then(data => this.setState({songs: data.feed.entry}))
    }

    // page renders twice - this is why we need a guard for null value 
    // aka guard against the empty array from initial page load render before API is called

    handleGenreSelected( index  ){
        const selectedGenre = this.state.songs.category.attributes.term;
        this.setState({currentGenre: selectedGenre})
    }

    render(){
        if (this.state.songs.length === 0){
            return <h1>I'm a Banana Boi</h1>
        }
        else {
            return (
                <div>
                    <h1>Top 20 Songs For the Masses</h1>
                    <GenreSelector songs ={this.state.songs} onGenreSelected={this.handleGenreSelected}/>
                    <ChartList songs = {this.state.songs}/> 
                </div>
            )
        }
    }


}

export default ChartContainer;