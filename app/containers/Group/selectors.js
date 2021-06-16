import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the group state domain
 */

const selectGroupDomain = state => state.group || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by Group
 */

const makeSelectGroup = () =>
  createSelector(
    selectGroupDomain,
    substate => substate,
  );

export default makeSelectGroup;
export { selectGroupDomain };
