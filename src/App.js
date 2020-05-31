import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import './App.css';
import {Title} from './components/Title';
import {Search} from './components/Search';
import { MoviesList } from './components/MoviesList';
import { Detail } from './pages/Detail'
class App extends Component {
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
  render() {
    const url = new URL(document.location)
    const hasId = url.searchParams.has('id')
    if(hasId){
      return <Detail id={url.searchParams.get('id')} />
    }
    return (
      <div className="App">
        <Title>Search Movies</Title>
        <div className="SearchForm-wrapper">
          <Search onResults={this._handleResults}/>
        </div>
        { this.state.loading
          ? this._renderResults()
          :<small>Use this form to search a movie</small>
        }
      </div>
    );
  }
}

export default App;
