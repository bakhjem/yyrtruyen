import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchSearch } from "../Action/NovelActions";
import { Tag, Skeleton,Icon } from 'antd';
import "antd/dist/antd.css";
class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }
    componentDidUpdate(prevProps, prevState) {
        if(this.props.search !== prevProps.search){
            this.setState({data: this.props.search.data})
        }
    }
    
    
    
  render() {
    console.log(this.props);
    console.log(this.state)
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
                    to={'/search/'+this.props.search.search+'/page/'+this.props.search.page}
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
                    to={'/search/'+this.props.search.page}
                  >
                    <span itemProp="title">All</span>
                  </Link>
                </span>
                <span className="separator">»</span>{this.props.search.page} page
              </p>
            </div>
          </div>
        </div>
        <div className="wrap_update tab_anh_dep danh_sach" style={{ marginBottom: 10}}>
          {this.state.data.length !== 0 ?
        this.state.data.map(data => (
            <div className="update_item list_category" title={data.novelsname}>
            <Link rel="nofollow" to={'/novel/'+data.idnovel} title={'/novel/'+data.novelsname}>
              <img src={data.cover} alt={data.novelsname} title={data.novelsname} />
            </Link>
            <h3 className="nowrap">
              <Link to={'/novel/'+data.idnovel} title={data.novelsname} >{data.novelsname} </Link>
            </h3>
            <Link to={'/novel/'+data.idnovel+'/'+data.idchapter} title={data.lasterchapter} className="chapter">{data.lasterchapter}</Link>
            <span><Icon type="eye" /> {data.view}</span>
                <p>{data.des}</p>
          </div>
        ))
        : <Skeleton active avatar></Skeleton>}
        <div className="clearfix"></div>
        </div>
        <div className="phan-trang">
        {this.props.search.page !== this.props.search.totalpage &&
        <a href={'/search/'+this.props.id+'/page/'+(parseInt(this.props.search.page)+1)} class="quantitychapter">Trang sau</a>
        }
        {this.props.search.page !== '1' &&
        <a href={'/newnovel/page/'+this.props.id+'/page/'+(parseInt(this.props.search.page)-1)} class="page">Trang trước</a>
        }
        </div>
      </div>
    );
  }
}

export default connect(
  state => ({
    search: state.Home.search,
  }),
  { fetchSearch }
)(Search);
