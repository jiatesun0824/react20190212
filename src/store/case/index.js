const types = {
  SET_LOADINGSHOW: 'SET_LOADINGSHOW',
  SET_FOOTERISSHOW: 'SET_FOOTERISSHOW'
}
//这是reducer
export const reducer = (state = { loadingShow: false, footerIsShow: true }, action) => {
  switch (action.type) {
      case types.SET_LOADINGSHOW:
          return { ...state, loadingShow: action.value};
      case types.SET_FOOTERISSHOW:
          return { ...state, footerIsShow: action.value};
      default:
          return state;
  }
}