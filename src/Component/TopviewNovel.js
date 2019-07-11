import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchHotnovel } from "../Action/NovelActions";
import { Skeleton, Icon } from 'antd';
import "antd/dist/antd.css";

class TopviewNovel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.props.hotnovel !== prevProps.hotnovel) {
      this.setState({ data: this.props.hotnovel.data })
    }
  }



  render() {
    console.log(this.props);
    return (
      <div>
        <div className="breadcrumb breadcrumbs">
          <div className="rdfa-breadcrumb">
            <div>
              <p>
                <span className="breadcrumbs-title" />
                <span
                  itemScope
                  itemType="http://data-vocabulary.org/Breadcrumb"
                >
                  <a
                    itemProp="url"
                    href="/"
                    className="home"
                    title="Đọc truyện online"
                  >
                    <span itemProp="title">Đọc truyện online</span>
                  </a>
                </span>
                <span className="separator">»</span>
                <span
                  itemScope
                  itemType="http://data-vocabulary.org/Breadcrumb"
                >
                  <Link
                    itemProp="url"
                    to={'/hotnovel/' + this.props.hotnovel.page}
                  >
                    <span itemProp="title">Truyện Hot</span>
                  </Link>
                </span>
                <span className="separator">»</span>
                <span
                  itemScope
                  itemType="http://data-vocabulary.org/Breadcrumb"
                >
                  <Link
                    itemProp="url"
                    to={'/hotnovel/' + this.props.hotnovel.page}
                  >
                    <span itemProp="title">All</span>
                  </Link>
                </span>
                <span className="separator">»</span>{this.props.hotnovel.page} page
              </p>
            </div>
          </div>
        </div>
        <div className="wrap_update tab_anh_dep danh_sach" style={{ marginBottom: 10 }}>
          {this.state.data.length !== 0 ?
            this.state.data.map(data => (
              <div className="update_item list_category" title={data.novelsname}>
                <Link rel="nofollow" to={'/novel/' + data.idnovel} title={'/novel/' + data.novelsname}>
                  <img src={data.cover} alt={data.novelsname} title={data.novelsname} />
                </Link>
                <h3 className="nowrap">
                  <Link to={'/novel/' + data.idnovel} title={data.novelsname} >{data.novelsname} </Link>
                </h3>
                <Link to={'/novel/' + data.idnovel + '/' + data.idchapter} title={data.lasterchapter} className="chapter">{data.lasterchapter}</Link>
                <span><Icon type="eye" /> {data.view}</span>
                <p>{data.des}</p>
              </div>
            )) : <Skeleton active></Skeleton>
          }
          <div className="clearfix"></div>
        </div>
        <div className="phan-trang">
          {this.props.hotnovel.page !== this.props.hotnovel.totalpage &&
            <a href={'/hotnovel/page/' + (parseInt(this.props.hotnovel.page) + 1)} class="quantitychapter">Trang sau</a>
          }
          {this.props.hotnovel.page !== '1' &&
            <a href={'/hotnovel/page/' + (parseInt(this.props.hotnovel.page) - 1)} class="page">Trang trước</a>
          }
        </div>
      </div>
    );
  }
}

export default connect(
  state => ({
    hotnovel: state.Home.hotnovel
  }),
  { fetchHotnovel }
)(TopviewNovel);
