import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchNewNovel } from "../Action/NovelActions";

class NewestNovel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }
    componentDidUpdate(prevProps, prevState) {
        if(this.props.newnovel !== prevProps.newnovel){
            this.setState({data: this.props.newnovel.data})
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
                    title="Read novel online"
                  >
                    <span itemProp="title">Read novel online</span>
                  </a>
                </span>
                <span className="separator">»</span>
                <span
                  itemScope
                  itemType="http://data-vocabulary.org/Breadcrumb"
                >
                  <Link
                    itemProp="url"
                    to={'/newnovel/'+this.props.newnovel.page}
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
                    to={'/update/'+this.props.newnovel.page}
                  >
                    <span itemProp="title">All</span>
                  </Link>
                </span>
                <span className="separator">»</span>{this.props.newnovel.page} page
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
        {this.props.newnovel.page !== this.props.newnovel.totalpage &&
        <a href={'/newnovel/page/'+(parseInt(this.props.newnovel.page)+1)} class="quantitychapter">Next page</a>
        }
        {this.props.newnovel.page !== '1' &&
        <a href={'/newnovel/page/'+(parseInt(this.props.newnovel.page)-1)} class="page">Pre page</a>
        }
        </div>
      </div>
    );
  }
}

export default connect(
  state => ({
    newnovel: state.Home.newnovel,
  }),
  { fetchNewNovel }
)(NewestNovel);
