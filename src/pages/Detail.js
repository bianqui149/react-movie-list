import React, { Component } from 'react';
import { ButtonBack } from '../components/ButtonBack'
import PropTypes from 'prop-types';
const API_KEY = '5fc11a0b';

export class Detail extends Component{
    static propTypes= {
        match: PropTypes.shape({
            params: PropTypes.object,
            isExact: PropTypes.bool,
            path: PropTypes.string,
            url: PropTypes.string
        })
    }
    state = { movie: {} }
    _goBack(){
         window.history.back()
    }
    _fetchMovie({id}){
        fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`)
            .then(res => res.json())
            .then(movie => {
                console.log({movie})
                this.setState({ movie })
            })
    }
    componentDidMount(){
        console.log(this.props);
        const { movieId } = this.props.match.params
        this._fetchMovie({ id: movieId })
    }
    render(){
        const { Title, Poster, Actors, Metascore, Plot } = this.state.movie 
        return (
            <div className="container">
                <div className="notification">
                    <article className="media">
                        <figure className="media-left">
                            <p className="image is-64x64">
                            <img src={Poster} alt={Title} />
                            </p>
                        </figure>
                        <div className="media-content">
                            <div className="content">
                            <p>
                                <strong>{Actors}</strong>
                                <br />
                                {Plot}
                            </p>
                            </div>
                            <nav className="level is-mobile">
                            <div className="level-left">
                                <a className="level-item">
                                <span className="icon is-small">{Metascore}<i className="fas fa-reply"></i></span>
                                </a>
                                <a className="level-item">
                                <span className="icon is-small"><i className="fas fa-retweet"></i></span>
                                </a>
                                <a className="level-item">
                                <span className="icon is-small"><i className="fas fa-heart"></i></span>
                                </a>
                            </div>
                            </nav>
                        </div>
                        <div className="media-right">
                            <ButtonBack />
                        </div>
                    </article>
                </div>
            </div>
        )
    }
}