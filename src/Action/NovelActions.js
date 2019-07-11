import * as api from '../Networks/ApiService';

/*------------------------------RETURN----------------------------------------*/
export const fetchMangeHomeSuccess = (mangalist) => {
  return {
    type: 'FETCH_MANGA_HOME',
    mangalist
  };
};

export const fetchHotnovelSuccess = (hotnovel) => {
  return {
    type: 'FETCH_HOT_NOVEL',
    hotnovel
  };
};

export const fetchGenresSuccess = (genres) => {
  return {
    type: 'FETCH_GENRES',
    genres
  };
};

export const fetchNovelDetailSuccess = (noveldetail) => {
  return {
    type: "FETCH_NOVEL_DETAIL",
    noveldetail
  };
};
export const fetchNovelChapterSuccess = (novelchapter) => {
  return {
    type: "FETCH_NOVEL_CHAPTER",
    novelchapter
  };
};
export const fetchNewupdateSuccess = (newupdate) => {
  return {
    type: "FETCH_NOVEL_NEW_UPDATE",
    newupdate
  };
};
export const fetchGenresDetailSuccess = (genresdetail) => {
  return {
    type: "FETCH_GENRES_DETAIL",
    genresdetail
  };
};
export const fetchNewNovelSuccess = (newnovel) => {
  return {
    type: "FETCH_NEW_NOVEL",
    newnovel
  };
};
export const fetchCompleteNovelSuccess = (completenovel) => {
  return {
    type: "FETCH_COMPLETED_NOVEL",
    completenovel
  };
};
export const fetchSearchSuccess = (search) => {
  return {
    type: "FETCH_SEARCH_NOVEL",
    search
  };
};


/*------------------------------FETCH----------------------------------------*/
export const fetchHome = (params) => {
  return (dispatch) => {
    api.getAll('update', params, function(response) {
      dispatch(fetchMangeHomeSuccess(response.data))
    });
  };
};
export const fetchNewupdate = (params) => {
  return (dispatch) => {
    api.getAll('update', params, function(response) {
      dispatch(fetchNewupdateSuccess(response))
    });
  };
};
export const fetchHotnovel = (params) => {
  return (dispatch) => {
    api.getAll('hotnovel', params, function(response) {
      dispatch(fetchHotnovelSuccess(response))
    });
  };
};
export const fetchGenres = (params) => {
  return (dispatch) => {
    api.getAll('genres', params, function(response) {
      dispatch(fetchGenresSuccess(response))
    });
  };
};
export const fetchNovelDetail = (params) => {
  return (dispatch) => {
    api.getAll('novel', params, function(response) {
      dispatch(fetchNovelDetailSuccess(response))
    });
  };
};
export const fetchNovelChapter = (params) => {
  return (dispatch) => {
    api.getAll('chapter', params, function(response) {
      dispatch(fetchNovelChapterSuccess(response))
    });
  };
};
export const fetchGenresDetail = (params) => {
  return (dispatch) => {
    api.getAll('genres', params, function(response) {
      dispatch(fetchGenresDetailSuccess(response))
    });
  };
};
export const fetchNewNovel = (params) => {
  return (dispatch) => {
    api.getAll('newest', params, function(response) {
      dispatch(fetchNewNovelSuccess(response))
    });
  };
};
export const fetchCompleteNovel = (params) => {
  return (dispatch) => {
    api.getAll('completed', params, function(response) {
      dispatch(fetchCompleteNovelSuccess(response))
    });
  };
};

export const fetchSearch = (params) => {
  return (dispatch) => {
    api.getAll('search', params, function(response) {
      dispatch(fetchSearchSuccess(response))
    });
  };
};

