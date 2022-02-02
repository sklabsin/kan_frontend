/**
 *
 * AppHeader
 *
 */
 import React, { useState, useEffect, Fragment, memo } from 'react';
 import PropTypes from 'prop-types';
 import { connect } from 'react-redux';
 import { createStructuredSelector } from 'reselect';
 import { compose } from 'redux';
 
 import { Link } from 'react-router-dom';
 
 import { useInjectSaga } from 'utils/injectSaga';
 import { useInjectReducer } from 'utils/injectReducer';
 import cx from 'classnames';
 import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
 import { makeSelectLayout } from '../selectors';
 import makeSelectApp from '../../App/selectors';
 import reducer from '../reducer';
 import saga from '../saga';
//  import http from '../../../../services/http';
 // Architect
 import AppLogo from '../AppLogo';
 import SearchBox from './Components/SearchBox';
//  import UserBox from './Components/UserBox';
//  import UnitBox from './Components/UnitBox';
//  import StationStatus from './Components/StationStatus';
//  import { IS_FREEZED } from '../../../Fir/Api';
//  import HeaderDots from './Components/HeaderDots';
//  import { toast } from 'react-toastify';
 // import ResizeDetector from 'react-resize-detector';
 
 // import AppHeader from './Layout/AppMain';
 
 export function AppHeader({ UI, app }) {
   useInjectReducer({ key: 'layout', reducer });
   useInjectSaga({ key: 'layout', saga });
   return (
     <Fragment>
       <ReactCSSTransitionGroup
         component="div"
         className={cx('app-header', UI.headerBackgroundColor, {
           'header-shadow': UI.enableHeaderShadow,
         })}
         transitionName="HeaderAnimation"
         transitionAppear
         transitionAppearTimeout={1500}
         transitionEnter={false}
         transitionLeave={false}
       >
         <AppLogo />
 
         <div
           className={cx('app-header__content', {
             'header-mobile-open': UI.enableMobileMenuSmall,
           })}
         >
           <div className="app-header-left">
             <SearchBox />
           </div>
           <div className="app-header-right">
           </div>
         </div>
       </ReactCSSTransitionGroup>
     </Fragment>
   );
 }
 AppHeader.propTypes = {
   UI: PropTypes.object,
   app: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
 };
 
 const mapStateToProps = createStructuredSelector({
   UI: makeSelectLayout(),
   app: makeSelectApp(),
 });
 
 export function mapDispatchToProps(dispatch) {
   return {
   };
 }
 
 const withConnect = connect(
   mapStateToProps,
   mapDispatchToProps,
 );
 
 export default compose(
   withConnect,
   memo,
 )(AppHeader);
 