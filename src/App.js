import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import ReduxToastr from 'react-redux-toastr';
import Header from './components/common/Header/header';
import Footer from './components/common/Footer/footer';
import QuickOptions from './components/common/quickOptions';
import routes from './routes';
import checkUserStatus from './services/checkUserStatus';
import NotFound from './components/NotFound/NotFound';
import SpinnerComponent from './components/common/Spinner';
import { store, persistor } from './store/store';
import '../public/styles/index.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    checkUserStatus();
  }

  render() {
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Router>
            <Fragment>
              <Header />
              <SpinnerComponent />
              <QuickOptions />
              <Switch>
                {
                  routes.map(route => (
                    <Route
                      exact={route.exact}
                      path={route.path}
                      key={route.path}
                      component={route.component}
                    />
                  ))
                }
                <Route component={NotFound} />
              </Switch>
              <Footer />
              <ReduxToastr
                timeOut={5000}
                newestOnTop
                preventDuplicates
                position="top-right"
                transitionIn="bounceInDown"
                transitionOut="bounceOutUp"
                progressBar
                closeOnToastrClick
              />
            </Fragment>
          </Router>
        </PersistGate>
      </Provider>
    );
  }
}

export default App;
