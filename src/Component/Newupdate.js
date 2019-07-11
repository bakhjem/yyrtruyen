import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchHome } from "../Action/NovelActions";
import { Skeleton,Icon } from 'antd';
import "antd/dist/antd.css";

class Newupdate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.props.newupdate !== prevProps.newupdate) {
      this.setState({ data: this.props.newupdate.data })
    }
  }



  render() {
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
                    to={'/update/' + this.props.newupdate.page}
                  >
                    <span itemProp="title">Latest</span>
                  </Link>
                </span>
                <span className="separator">»</span>
                <span
                  itemScope
                  itemType="http://data-vocabulary.org/Breadcrumb"
                >
                  <Link
                    itemProp="url"
                    to={'/update/' + this.props.newupdate.page}
                  >
                    <span itemProp="title">All</span>
                  </Link>
                </span>
                <span className="separator">»</span>{this.props.newupdate.page} page
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
          {/* <div className="clearfix"></div> */}
        </div>
        <div className="phan-trang">
          {this.props.newupdate.page !== this.props.newupdate.totalpage &&
            <a href={'/updates/page/' + (parseInt(this.props.newupdate.page) + 1)} class="quantitychapter">Trang sau</a>
          }
          {this.props.newupdate.page !== '1' &&
            <a href={'/updates/page/' + (parseInt(this.props.newupdate.page) - 1)} class="page">Trang trước</a>
          }
        </div>
      </div>
    );
  }
}

export default connect(
  state => ({
    newupdate: state.Home.newupdate,
  }),
  { fetchHome }
)(Newupdate);
