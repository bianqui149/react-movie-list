import React, { Component } from 'react';
const API_KEY = '5fc11a0b';
export class Search extends Component{
    state = {
        inputMovie: ''
    }
    _handleChange = (e) => {
        this.setState({ inputMovie: e.target.value })
    }
    _handleSubmit = (e) =>{
        e.preventDefault();
        const inputMovie = this.state.inputMovie;
        fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${inputMovie}`)
            .then(res => res.json())
            .then(results => {
                //const { Search, totalResults } = results
                const { Search = [], totalResults = "0" } = results
                //const searchResults = Search || []
                //const searchResults = Search || []
                console.log({Search,totalResults})
                //this.props.onResults(searchResults)
                this.props.onResults(Search)
            })
    }
    render () {
        return(
            <form onSubmit={this._handleSubmit}>
                <div className="field has-addons">
                    <div className="control">
                        <input
                            className="input"
                            onChange={this._handleChange}
                            type="text"
                            placeholder="Find a repository" />
                    </div>
                    <div className="control">
                        <button className="button is-info">
                            Search
                        </button>
                    </div>
                </div>
            </form>
        )
    }
}