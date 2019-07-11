import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchHome,fetchHotnovel } from "../Action/NovelActions";
import { Icon,Skeleton } from 'antd';
import "antd/dist/antd.css";


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
          docnhieu: []
        }
        
    }
    componentDidMount() {
        let params = {
            page: 1
        }
        this.props.fetchHome(params);
        this.props.fetchHotnovel(params);
    }
    
    
    
  render() {
    console.log(this.props)
    return (
      <div>
        <div className="cotgiua">
          <div className="cotgiua_menu">
            <Link
              rel="nofollow"
              to={'/updates/page/1'}
              title="RECENTLY UPDATED NOVEL"
              className="head_title actived muc_truyen_moi_cap_nhat"
            >
              Truyện mới
            </Link>
            {/* <Link
              rel="nofollow"
              to={'/completed/page/1'}
              title="COMPLETED NOVEL"
              className="head_title muc_truyen_hoan_thanh"
            >
              COMPLETED
            </Link> */}
            {/* <Link
              rel="nofollow"
              to={'/newnovel/page/1'}
              title="NEWEST NOVEL"
              className="head_title"
            >
              NEWEST
            </Link> */}
            <Link
              rel="nofollow"
              to={'/hotnovel/page/1'}
              title="TOP VIEW NOVEL"
              className="head_title"
            >
              Truyện hot
            </Link>
          </div>
          <div className="wrap_update home">
            <div className="daily-update">
              <h2 className="title update-title" title="Recently Updated MANGA">
                Mới cập nhật
              </h2>
            </div>
            {this.props.mangalist.length !== 0 ?
            this.props.mangalist.map(mangalist => (
              <div className="update_item">
                <div className="update_image">
                  <Link
                    className="tooltip"
                    data-tooltip="sticky_5970"
                    to={'/novel/'+mangalist.idnovel}
                  >
                    <img
                      src={mangalist.cover}
                      alt={mangalist.novelsname}
                    />
                  </Link>
                </div>
                <div className="nowrap">
                  <Link
                    className="tooltip"
                    data-tooltip="sticky_5970"
                    to={'/novel/'+mangalist.idnovel}
                    title= {mangalist.novelsname}
                  >
                    {mangalist.novelsname}
                  </Link>
                  {/* <em>43 minutes ago </em> */}
                </div>
                <Link
                  to={'/novel/'+mangalist.idnovel+'/'+mangalist.idchapter}
                  title={mangalist.lasterchapter}
                  className="chapter"
                >
                  {mangalist.lasterchapter}
                </Link>
                <br />
                <span style={{color: '#6f6f6f',fontSize:13}}><Icon type="eye" /> {mangalist.view}
                </span>
                <p>{mangalist.des}</p>
              </div>
            )): <Skeleton active avatar></Skeleton> }
            <Link to={'/updates/page/1'} title="More" className="xemthem" rel="nofollow">Xem thêm</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  state => ({
    mangalist: state.Home.mangalist,
    hotnovel: state.Home.hotnovel
  }),
  { fetchHome,fetchHotnovel  }
)(Home);
