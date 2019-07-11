import React, { Component } from "react";
import Header from '../Component/Header';
import Home from '../Component/Home';
import TopWeakeNovel from '../Component/TopWeakeNovel';
import Genres from '../Component/Genres';
import Footer from '../Component/Footer';
import { Helmet } from 'react-helmet';
import ReactGA from 'react-ga';



class HomeContainer extends Component {

  initializeReactGA() {
    ReactGA.initialize('UA-142539435-1');
    ReactGA.pageview('/homepage');
  }
  componentDidMount() {
    this.initializeReactGA();
  }
  
  render() {
    return (
      <div>
        <Helmet>
          <title>Đọc truyện online - YYtruyen.com</title>
          <meta name="description" content="Đọc truyện miễn phí, cập nhật nhanh nhất các truyện ngôn tình, truyện kiếm hiệp, xuyên không, sủng, ngược và nhiều thể loại khác" />
          <meta name="theme-color" content="#008f68" />
          <meta name="keywords" content="đọc truyện, đọc truyện online, truyện ngôn tình, truyện kiếm hiệp, xuyên không" />
        </Helmet>
        <Header />
        <div id="main_body">
          <Home />
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

export default HomeContainer;
