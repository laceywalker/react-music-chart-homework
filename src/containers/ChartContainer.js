import React, {Component} from "react";
import ChartList from "../components/ChartList";

class ChartContainer extends Component{
    constructor(props){
        super(props);
        this.state = {
            songs: []
        }
    }

    componentDidMount(){
        const url = "https://itunes.apple.com/gb/rss/topsongs/limit=20/json"
        fetch(url)
        .then(res => res.json())
        .then(data => this.setState({songs: data.feed.entry}))
    }

    render(){
        if (this.state.songs.length === 0){
            return <h1>I'm a Banana Boi</h1>
        }
        else {
            return <ChartList songs = {this.state.songs}/> 
        }
    }


}

export default ChartContainer;