import React, { Component } from 'react';
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchGenres } from "../Action/NovelActions";

class Genres extends Component {
    constructor(props) {
        super(props);
        
    }
    componentDidMount() {
        this.props.fetchGenres({})
    }
    
    render() {
        console.log(this.props.genres)
        return (
                <table className="theloai">
                <tbody>
                <tr><td colspan="3"><span class="feature_title">GENRES</span></td></tr>
                <tr className='flex-genres' style={{borderTop: 2}}>
                {/* {this.props.genres.map(genres => (
                    <td><Link className="theloai_select" to={'/genres/'+genres.idgenres+'/page/1'} title={genres.genrename}>{genres.genrename}</Link></td>
                ))} */}
                </tr>
                </tbody>
                </table>
        );
    }
}

export default connect(
    state => ({
        genres: state.Home.genres
    }),
    { fetchGenres }
  )(Genres);