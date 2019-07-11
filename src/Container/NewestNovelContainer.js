import React, { Component } from "react";
import { fetchNewNovel } from "../Action/NovelActions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Header from "../Component/Header";
import Newupdate from "../Component/Newupdate";
import TopWeakeNovel from "../Component/TopWeakeNovel";
import Genres from "../Component/Genres";
import Footer from "../Component/Footer";
import NewestNovel from "../Component/NewestNovel";

class NewestNovelContainer extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    let params = {
      page: this.props.match.params.id
    };
    this.props.fetchNewNovel(params);
    window.scrollTo(0,0);
  }

  render() {
    return (
      <div>
        <Header />
        <div id="main_body">
          <div className="cotgiua">
            <NewestNovel />
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
    newnovel: state.Home.newnovel,
  }),
  { fetchNewNovel }
)(NewestNovelContainer);
