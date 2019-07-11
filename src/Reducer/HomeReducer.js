
const initialState = {
  items: [],
  item: {},
  mangalist: [],
  mangadetail: [],
  genres: [],
  cate: [],
  hotnovel: [],
  noveldetail: [],
  novelchapter: [],
  newupdate:[],
  genresdetail: [],
  completenovel: [],
  newnovel: [],
  search: []
}

export const HomeReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_MANGA_HOME':
      return {
        ...state,
            mangalist: action.mangalist
      };
    case 'FETCH_HOT_NOVEL':
      return {
        ...state,
        hotnovel: action.hotnovel
      };
    case 'FETCH_GENRES':
      return {
        ...state,
        genres: action.genres
      };
    case "FETCH_NOVEL_DETAIL":
      return {
        ...state,
        noveldetail: action.noveldetail
      };
      case "FETCH_NOVEL_CHAPTER":
      return {
        ...state,
        novelchapter: action.novelchapter
      };
      case "FETCH_NOVEL_NEW_UPDATE":
      return {
        ...state,
        newupdate: action.newupdate
      };
      case "FETCH_GENRES_DETAIL":
      return {
        ...state,
        genresdetail: action.genresdetail
      };
      case "FETCH_NEW_NOVEL":
      return {
        ...state,
        newnovel: action.newnovel
      };
      case "FETCH_COMPLETED_NOVEL":
      return {
        ...state,
        completenovel: action.completenovel
      };
      case "FETCH_SEARCH_NOVEL":
      return {
        ...state,
        search: action.search
      };
    default:
      return state
  }
}

export default HomeReducer;
