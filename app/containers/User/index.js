/**
 *
 * User
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectUser from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

export function User() {
  useInjectReducer({ key: 'user', reducer });
  useInjectSaga({ key: 'user', saga });

  return (
    <div>
      <Helmet>
        <title>User</title>
        <meta name="description" content="Description of User" />
      </Helmet>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

User.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  user: makeSelectUser(),
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
)(User);
