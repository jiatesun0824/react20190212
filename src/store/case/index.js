const types = {
  SET_LOADINGSHOW: 'SET_LOADINGSHOW',
  SET_FOOTERISSHOW: 'SET_FOOTERISSHOW'
}
const initialState = {
  loadingShow: false,
  footerIsShow: true
}
//需要渲染什么数据
const mapStateToProps = (state) => {
  return {
    loadingShow: state.loadingShow,
    footerIsShow: state.footerIsShow
  }
}
//需要触发什么行为
const mapDispatchToProps = (dispatch) => {
  return {
    setLoading: (value) => dispatch({ type: types.SET_LOADINGSHOW, value }),
    setFooterIsShow: (value) => dispatch({ type: types.SET_FOOTERISSHOW, value })
  }
}
//这是reducer
const reducer = (state, action) => {
  if (!state) return initialState
  switch (action.type) {
      case types.SET_LOADINGSHOW:
          return { ...state, loadingShow: action.value};
      case types.SET_FOOTERISSHOW:
          return { ...state, footerIsShow: action.value};
      default:
          return state;
  }
}
export { mapDispatchToProps, mapStateToProps, reducer}