import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchCompleteNovel } from "../Action/NovelActions";

class CompletedNovel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }
    componentDidUpdate(prevProps, prevState) {
        if(this.props.completenovel !== prevProps.completenovel){
            this.setState({data: this.props.completenovel.data})
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
                    to={'/completed/'+this.props.completenovel.page}
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
                    to={'/completed/'+this.props.completenovel.page}
                  >
                    <span itemProp="title">All</span>
                  </Link>
                </span>
                <span className="separator">»</span>{this.props.completenovel.page} page
              </p>
            </div>
          </div>
        </div>
        <div className="wrap_update tab_anh_dep danh_sach" style={{ marginBottom: 10}}>
        {this.state.data.map(data => (
            <div className="update_item list_category" title={data.novelsname}>
            <Link rel="nofollow" to={'/novel/'+data.idnovel} title={'/novel/'+data.novelsname}>
              <img src={data.cover} alt={data.novelsname} title={data.novelsname} />
            </Link>
            <h3 className="nowrap">
              <Link to={'/novel/'+data.idnovel} title={data.novelsname} >{data.novelsname} </Link>
            </h3>
            <Link to={'/novel/'+data.idnovel+'/'+data.idchapter} title={data.lasterchapter} className="chapter">{data.lasterchapter}</Link>
            {/* <span>Last updated : 21-Jan-2019 06:29</span>
            <span>View : 13,396</span> */}
          </div>
        ))}
        <div className="clearfix"></div>
        </div>
        <div className="phan-trang">
        {this.props.completenovel.page !== this.props.completenovel.totalpage &&
        <a href={'/completed/page/'+(parseInt(this.props.completenovel.page)+1)} class="quantitychapter">Trang sau</a>
        }
        {this.props.completenovel.page !== '1' &&
        <a href={'/completed/page/'+(parseInt(this.props.completenovel.page)-1)} class="page">Trang trước</a>
        }
        </div>
      </div>
    );
  }
}

export default connect(
  state => ({
    completenovel: state.Home.completenovel,
  }),
  { fetchCompleteNovel }
)(CompletedNovel);
