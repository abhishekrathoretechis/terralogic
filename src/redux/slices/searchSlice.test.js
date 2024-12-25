import searchReducer, {
  setLogin,
  resetSearch,
  fetchUsersThunk,
} from './searchSlice';
import {expect} from '@jest/globals';
import '@testing-library/jest-native/extend-expect';

describe('searchSlice', () => {
  it('handles setLogin action', () => {
    const initialState = {login: '', users: [], loading: false};
    const action = setLogin('testuser');
    const state = searchReducer(initialState, action);

    expect(state.login).toBe('testuser');
  });

  it('handles resetSearch action', () => {
    const initialState = {
      login: 'testuser',
      users: ['result1'], // Corrected from 'results' to 'users'
      loading: false,
    };
    const action = resetSearch();
    const state = searchReducer(initialState, action);

    expect(state.login).toBe('');
    expect(state.users).toEqual([]); // Corrected to check 'users' instead of 'results'
  });

  it('handles fetchUsersThunk.fulfilled action', () => {
    const initialState = {login: '', users: [], loading: true};
    const action = {
      type: fetchUsersThunk.fulfilled.type,
      payload: {items: ['result1', 'result2']}, // Proper payload structure
    };
    const state = searchReducer(initialState, action);

    expect(state.users).toEqual(['result1', 'result2']);
    expect(state.loading).toBe(false);
  });
});
