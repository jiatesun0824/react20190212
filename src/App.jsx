import React, { Component } from 'react';
import  Footer from '@/components/footer/footer.jsx'
import '@/App.scss'
import { Route, Redirect } from 'react-router'
import { HashRouter, Switch } from 'react-router-dom'
import Home from '@/pages/home/home.jsx'
import Case from '@/pages/case/case.jsx'
import { mapDispatchToProps } from '@/store/home/index.js';
import { connect } from 'react-redux';
// import routers from './routers/index.js'
class App extends Component {
  render() {
    return (
      <div className="App">
        <HashRouter>
          <div>
            <Route exact path="/" render={() => <Redirect to="/home" />} />
            <Switch>
              <Route path='/home' component={Home} />
              <Route path='/case' component={Case} />
            </Switch>
            {this.props.footerIsShow && <Footer userName='123'></Footer>}
          </div>
        </HashRouter>
      </div>
    );
  }
}
App = connect((state) => ({
  loadingShow: state.reducer.loadingShow,
  footerIsShow: state.reducer.footerIsShow
}), mapDispatchToProps)(App)

export default App;
