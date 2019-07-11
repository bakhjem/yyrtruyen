import React, { Component } from "react";
import Header from '../Component/Header';
import Home from '../Component/Home';
import TopWeakeNovel from '../Component/TopWeakeNovel';
import Genres from '../Component/Genres';
import Footer from '../Component/Footer';
import NovelDetail from "../Component/NovelDetail";
import { fetchNovelDetail } from "../Action/NovelActions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet';
import ReactGA from 'react-ga';

class NovelContainer extends Component {
    constructor(props) {
        super(props);
        
    }
    initializeReactGA() {
      ReactGA.initialize('UA-142539435-1');
      ReactGA.pageview(`/novel/${this.props.match.params.id}`);
    }
    componentDidMount() {
        let params = {
            id: this.props.match.params.id
        }
        this.props.fetchNovelDetail(params);
        window.scrollTo(0,0);
        this.initializeReactGA();
    }
    
  render() {
      console.log(this.props)
    return (
      <div>
        <Helmet>
          <title>{`Đọc ${this.props.noveldetail.novelsname}`} - YYtruyen</title>
          {this.props.noveldetail.description !== null ?
          <meta name="description" content={this.props.noveldetail.description} /> : <meta name="description" content={`Đọc truyện ${this.props.noveldetail.novelsname} online free tại yytruyen.com`} /> }
          <meta name="theme-color" content="#008f68" />
          <meta name="keywords" content="đọc truyện online, truyện online, truyện ngôn tình, truyện kiếm hiệp, truyện ngược, sủng" />
        </Helmet>
        <Header />
        <div id="main_body">
            <NovelDetail></NovelDetail>
          <div className="cotphai">
            <TopWeakeNovel />
            {/* <Genres /> */}
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default connect(
    state => ({
      noveldetail: state.Home.noveldetail
    }),
    { fetchNovelDetail }
  )(NovelContainer);