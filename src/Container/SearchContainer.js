import React, { Component } from "react";
import { fetchSearch } from "../Action/NovelActions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Header from "../Component/Header";
import TopWeakeNovel from "../Component/TopWeakeNovel";
import Genres from "../Component/Genres";
import Footer from "../Component/Footer";
import Search from "../Component/Search";

class SearchContainer extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    let params = {
      id: this.props.match.params.slug,
      page: this.props.match.params.id
    };
    this.props.fetchSearch(params);
    window.scrollTo(0,0);
  }

  render() {
    return (
      <div>
        <Header />
        <div id="main_body">
          <div className="cotgiua">
            <Search id={this.props.match.params.slug}/>
          </div>
          <div className="cotphai">
            <TopWeakeNovel />
            {/* <Genres /> */}
          </div>
        </div>
        <Footer></Footer>
      </div>
    );
  }
}

export default connect(
  state => ({
    search: state.Home.search
  }),
  { fetchSearch }
)(SearchContainer);
