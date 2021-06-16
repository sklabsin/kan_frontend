/**
 *
 * Layout
 *
 */

import React, { memo,Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import {makeSelectLayout} from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import cx from 'classnames';
import AppSidebar from './AppSidebar';
import AppHeader from './AppHeader';
import AppFooter from './AppFooter';
export function Layout({ UI,app,children }) {
  useInjectReducer({ key: 'layout', reducer });
  useInjectSaga({ key: 'layout', saga });

  return (
    <div>
     <Fragment>
            <div
              className={cx(
                "app-container app-theme-" + UI.colorScheme,
                { 'fixed-header': UI.enableFixedHeader },
                { 'fixed-sidebar': UI.enableFixedSidebar },
                { 'fixed-footer': UI.enableFixedFooter },
                { 'closed-sidebar': UI.enableClosedSidebar},
                { 'closed-sidebar-mobile': UI.closedSmallerSidebar },
                { 'sidebar-mobile-open': UI.enableMobileMenu },
                { 'body-tabs-shadow-btn': UI.enablePageTabsAlt },
              )}>
                <AppHeader/>
                <div className="app-main">
                <AppSidebar />   
                <div className="app-main__outer">
                  <div className="app-main__inner">{children}</div>
                </div>
              </div>
              <AppFooter/>
         </div>
      </Fragment>
    </div>
  );
}

Layout.propTypes = {
  dispatch: PropTypes.func.isRequired,
  UI: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  UI: makeSelectLayout(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(Layout);
