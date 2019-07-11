import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchHotnovel } from "../Action/NovelActions";

class TopWeakeNovel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      docnhieu: []
    };
  }
  componentDidMount() {
    let params = {
      page: 1
    };
    this.props.fetchHotnovel(params);
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.props.hotnovel !== prevProps.hotnovel) {
      var arr = [];
      for (let i = 0; i < 10; i++) {
        arr.push({
            key: i,
            novelsname: this.props.hotnovel.data[i].novelsname,
            idnovel: this.props.hotnovel.data[i].idnovel,
            lasterchapter: this.props.hotnovel.data[i].lasterchapter,
        });
      }
      this.setState({ docnhieu: arr });
    }
  }
  render() {
    return (
      <div className="doc_nhieu">
        <h2 className="feature_title">Truyện hot trong tuần</h2>
        <ul>
        {this.state.docnhieu.map((docnhieu,key) => (
          <li>
            <span>{key}</span>{" "}
            <a
              href={'/novel/'+docnhieu.idnovel}
              title={docnhieu.novelsname}
              className="chapter"
            >
              {docnhieu.novelsname} - {docnhieu.lasterchapter}
            </a>
          </li>
        ))}
        </ul>
      </div>
    );
  }
}

export default connect(
  state => ({
    hotnovel: state.Home.hotnovel
  }),
  { fetchHotnovel }
)(TopWeakeNovel);
