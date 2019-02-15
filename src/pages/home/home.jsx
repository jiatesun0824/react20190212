import React, {Component} from 'react';
import { connect } from 'react-redux'
import { mapDispatchToProps } from '@/store/home/index.js';

class Home extends Component{ // 根组件
  showfooterShow() {
    this.props.setFooterIsShow(true)
  }
  render() {
    return (
      <div onClick={this.showfooterShow.bind(this)}>我是首页</div>
    )
  }
}

export default connect((state) => ({
  loadingShow: state.loadingShow,
  footerIsShow: state.footerIsShow
}), mapDispatchToProps)(Home)