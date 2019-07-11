import React, { Component } from "react";
import { fetchCompleteNovel } from "../Action/NovelActions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Header from "../Component/Header";
import Newupdate from "../Component/Newupdate";
import TopWeakeNovel from "../Component/TopWeakeNovel";
import Genres from "../Component/Genres";
import Footer from "../Component/Footer";
import CompletedNovel from "../Component/CompletedNovel";

class CompletedContainer extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    let params = {
      page: this.props.match.params.id
    };
    this.props.fetchCompleteNovel(params);
    window.scrollTo(0,0);
  }

  render() {
    return (
      <div>
        <Header />
        <div id="main_body">
          <div className="cotgiua">
            <CompletedNovel />
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
    completenovel: state.Home.completenovel,
  }),
  { fetchCompleteNovel }
)(CompletedContainer);
