import axios from 'axios';
import history from '../history';

let endpoint = "http://139.180.198.93:8001/";

/*-----------------------------GET ALL----------------------------------------*/
export function getAll(api_name, params,callback) {
  let _apiUrl = endpoint + api_name;
  let _params = setParams(params);
  let _headers = {
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      'Access-Control-Allow-Origin':'*'
    }
  };


  axios.get(_apiUrl, _params, _headers).then(function(response) {
      callback(response.data);
  }).catch(error => {
    catchError(error);
    // throw(error);
  });
}

/*-----------------------------GET ONE----------------------------------------*/
export function getOne(api_name, id, params, callback) {
  let _apiUrl = endpoint + api_name + '/' + id;
  let _params = setParams(params);
  let _headers = {
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      'Access-Control-Allow-Origin':'*'
    }
  };

  axios.get(_apiUrl, _params, _headers).then(function(response) {
    callback(response.data);
  }).catch(error => {
    throw(error);
  });
}



/*-----------------------------SET PARAMS-------------------------------------*/
export function setParams(params) {
  let axios_params = {
    params: params
  };
  return axios_params;
}


export function catchError(error) {
  // if(error.response.status === 404) {
  //   history.push("#/404");
  // } else if(error.response.status === 500) {
  //   console.log(error.response);
  //   Modal.error({
  //     title: 'Thông Báo',
  //     content: (error.response.statusText),
  //     onOk: () => {
  //         window.location.reload();
  //     }
  // });
    // history.push("#/500");
  // } else if(error.response.status === 408) {
  //   history.push("/login");
  //   window.location.reload(true);
  // } else if(error.response.status === 401) {
  //   Modal.error({
  //     title: 'Thông Báo',
  //     content: 'Bạn Không có quyền truy cập',
  //     onOk: () => {
  //         window.location.reload();
  //     }
  // });
  // }

  //window.location.reload(true);
}
