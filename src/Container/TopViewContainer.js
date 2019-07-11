import React, { Component } from "react";
import { fetchHotnovel } from "../Action/NovelActions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Header from "../Component/Header";
import TopWeakeNovel from "../Component/TopWeakeNovel";
import Genres from "../Component/Genres";
import Footer from "../Component/Footer";
import GenresDetail from "../Component/GenresDetail";
import TopviewNovel from "../Component/TopviewNovel";

class TopViewContainer extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    let params = {
      page: this.props.match.params.id,
    };
    this.props.fetchHotnovel(params);
    window.scrollTo(0,0);
  }

  render() {
    return (
      <div>
        <Header />
        <div id="main_body">
          <div className="cotgiua">
            <TopviewNovel />
          </div>
          <div className="cotphai">
            {/* <TopWeakeNovel /> */}
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
    hotnovel: state.Home.hotnovel
  }),
  { fetchHotnovel }
)(TopViewContainer);
