import React from 'react';
import { Switch, Route,useHistory } from 'react-router-dom';
import Login from 'containers/Login/Loadable';
import HomePage from 'containers/HomePage/Loadable';
import Home from 'containers/Home/Loadable';
import FeaturePage from 'containers/FeaturePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Header from 'components/Header';
import Footer from 'components/Footer';
import Layout from '../Layout/Loadable';
import { FlatNav } from '../Layout/AppNav/NavItems';
import AppRegistry from '../App/AppRegistry';
export default function App({app}) {
  const page = { ...AppRegistry };
  console.log(page)
  return (
    <div>

    
      {/* <Header /> */}
      <Switch>
        <Route exact path="/login" component={Login} />
        {/* <Route exact path="/home" component={Home} /> */}
        <Route path="/features" component={FeaturePage} />
        <Layout>
            {
            FlatNav.map((nav, index) => {
              return nav.component && <Route key={index} exact path={nav.to} component={page[nav.component]} />
            })
              }
      </Layout>
      <Route path="" component={NotFoundPage} />
      </Switch>
      {/* <Footer /> */}
      </div>
  );
}
