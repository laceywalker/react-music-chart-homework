import React, {Component} from "react";

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
        .then(data => this.setState({songs: data}))
    }

    render(){
        // console.log(this.state.songs)
        return "I am ChartList. Nice to meet you."
    }


}

export default ChartContainer;