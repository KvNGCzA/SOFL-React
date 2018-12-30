import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import Header from '../src/components/common/Header/header';
import Footer from '../src/components/common/Footer/footer';
import QuickOptions from '../src/components/common/quickOptions';
import routes from './routes';
import NotFound from './components/NotFound/NotFound';
// import logo from './logo.svg';
import { store, persistor } from './store/store';
import '../public/styles/index.scss';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Router>
            <Fragment>
              <Header />
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
            </Fragment>
          </Router>
        </PersistGate>
      </Provider>  
    );
  }
}

export default App;
