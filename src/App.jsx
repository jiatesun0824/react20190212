import React, { Component } from 'react';
import { Footer } from '@/components/footer/footer.jsx'
import '@/App.scss'
import { Route, Redirect } from 'react-router'
import { HashRouter, Switch } from 'react-router-dom'
import Home from '@/pages/home/home.jsx'
import Case from '@/pages/case/case.jsx'
import { mapDispatchToProps, mapStateToProps} from '@/store/home/index.js';
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
App = connect(mapStateToProps, mapDispatchToProps)(App)

export default App;
