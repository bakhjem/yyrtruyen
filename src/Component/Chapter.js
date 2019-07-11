import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchGenres } from "../Action/NovelActions";
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import { Skeleton, Card, Button, Icon } from 'antd';
import "antd/dist/antd.css";

class Chapter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      prechap: undefined,
      nextchap: undefined
    };
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.state.prechap === undefined) {
      if (this.props.noveldetail.chapterlist !== undefined) {
        if (this.props.noveldetail.chapterlist.length === 1) {
          return this.setState({ prechap: "", nextchap: "" });
        }
        for (let i = 0; i < this.props.noveldetail.chapterlist.length; i++) {
          if (
            this.props.novelchapter.idchapter ===
            this.props.noveldetail.chapterlist[i].idchapter
          ) {
            if (i === 0) {
              this.setState({
                prechap: "",
                nextchap: this.props.noveldetail.chapterlist[i + 1].idchapter
              });
            }
            if (i > 0 && i < this.props.noveldetail.chapterlist.length - 1) {
              this.setState({
                prechap: this.props.noveldetail.chapterlist[i - 1].idchapter,
                nextchap: this.props.noveldetail.chapterlist[i + 1].idchapter
              });
            }
            if (i === this.props.noveldetail.chapterlist.length - 1) {
              this.setState({
                prechap: this.props.noveldetail.chapterlist[i - 1].idchapter,
                nextchap: ""
              });
            }
          }
        }
      }
    }
  }

  render() {
    console.log(this.props);
    console.log(this.state);

    return (
      <div>
        <div className="breadcrumb breadcrumbs breadcrumbs_doc">
          <div className="rdfa-breadcrumb">
            <div>
              <p>
                <span className="breadcrumbs-title" />
                <span>
                  <Link to="/" title="Đọc truyện online" className="home">
                    Đọc truyện online
                  </Link>
                </span>
                <span className="separator">»</span>
                <span>
                  <Link
                    to={"/novel/" + this.props.novelchapter.idnovels}
                    className="home"
                  >
                    {this.props.novelchapter.novelsname}
                  </Link>
                </span>
                <span className="separator">»</span>{" "}
                {this.props.novelchapter.chaptername}
              </p>
            </div>
          </div>
        </div>
        <div className="menu_doc" style={{ flexDirection: 'row', padding: 10 }}>
        <Link style={{ color: 'white' }} to={'/novel/' + this.props.novelchapter.idnovels}>
            <Button type="primary" style={{ margin: 5 }}>
              <Icon type="book" theme="twoTone" />
              Danh sách chương
            </Button>
            </Link>
            {this.state.prechap !== "" && (
              <a
              rel="nofollow"
              style={{ color: 'white' }}
              // className="btn_theodoi btn_doc"
              href={'/novel/' + this.props.novelchapter.idnovels + '/' + this.state.prechap}
            >
              <Button type="primary" style={{ margin: 5 }}>
                <Icon type="double-left" />
                
                  Chương trước
              
              </Button>
              </a>
            )}
            {this.state.nextchap !== "" && (
              <a
              rel="nofollow"
              // className="btn_theodoi btn_doc"
              style={{ color: 'white' }}
              href={'/novel/' + this.props.novelchapter.idnovels + '/' + this.state.nextchap}
            >
              <Button type="primary" style={{ margin: 5 }}>
                Chương sau
              
              <Icon type="double-right" />
              </Button>
              </a>
            )}
          </div>
        <div className="hentry">
          <h1 className="name_chapter entry-title">{this.props.novelchapter.chaptername}</h1>
          <div className="entry-content">
            <div id="vung_doc" className="vung_doc">
              {this.props.novelchapter.content !== undefined ?
                ReactHtmlParser(this.props.novelchapter.content)
                : <Skeleton loading={true} active />
              }
            </div>

          </div>
          <div className="menu_doc" style={{ flexDirection: 'row', padding: 10 }}>
          <Link style={{ color: 'white' }} to={'/novel/' + this.props.novelchapter.idnovels}>
            <Button type="primary" style={{ margin: 5 }}>
              <Icon type="book" theme="twoTone" />
              Danh sách chương
            </Button>
            </Link>
            {this.state.prechap !== "" && (
              <a
              rel="nofollow"
              style={{ color: 'white' }}
              // className="btn_theodoi btn_doc"
              href={'/novel/' + this.props.novelchapter.idnovels + '/' + this.state.prechap}
            >
              <Button type="primary" style={{ margin: 5 }}>
                <Icon type="double-left" />
                
                  Chương trước
              
              </Button>
              </a>
            )}
            {this.state.nextchap !== "" && (
              <a
              rel="nofollow"
              // className="btn_theodoi btn_doc"
              style={{ color: 'white' }}
              href={'/novel/' + this.props.novelchapter.idnovels + '/' + this.state.nextchap}
            >
              <Button type="primary" style={{ margin: 5 }}>
                
                  Chương sau
              
              <Icon type="double-right" />
              </Button>
              </a>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  state => ({
    novelchapter: state.Home.novelchapter,
    noveldetail: state.Home.noveldetail
  }),
  { fetchGenres }
)(Chapter);
