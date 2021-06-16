/**
 *
 * Group
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
import makeSelectGroup from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

export function Group() {
  useInjectReducer({ key: 'group', reducer });
  useInjectSaga({ key: 'group', saga });

  return (
    <div>
      <Helmet>
        <title>Group</title>
        <meta name="description" content="Description of Group" />
      </Helmet>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

Group.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  group: makeSelectGroup(),
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
)(Group);
