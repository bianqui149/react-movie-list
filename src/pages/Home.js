import React, { Component } from 'react';
import {Title} from '../components/Title'
import {Search} from '../components/Search'
import { MoviesList } from '../components/MoviesList'

export class Home extends Component{
    state = { loading: false, results: [] }
    _handleResults = (results) => {
        this.setState({ results, loading: true })
    }
    _renderResults () {
        //return typeof this.state.results === 'undefined'
        return this.state.results.length === 0 
            ? <p> Not Results </p>
            : <MoviesList movies={this.state.results} />
    }
    render(){
        return(
            <div>
                <Title>Search Movies</Title>
                <div className="SearchForm-wrapper">
                    <Search onResults={this._handleResults}/>
                </div>
                { this.state.loading
                ? this._renderResults()
                :<small>Use this form to search a movie</small>
                }
            </div>
        )
    }
}