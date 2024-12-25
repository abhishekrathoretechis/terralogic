import React from 'react';
import {render, fireEvent, waitFor} from '@testing-library/react-native';
import {Provider} from 'react-redux';
import {configureStore} from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import SearchComponent from './SearchComponent';
import searchReducer from '../redux/slices/searchSlice';

const store = configureStore({
  reducer: {
    search: searchReducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(thunk),
});

describe('SearchComponent', () => {
  it('dispatches actions correctly on submit', async () => {
    const {getByPlaceholderText, getByText} = render(
      <Provider store={store}>
        <SearchComponent />
      </Provider>,
    );

    const input = getByPlaceholderText('Enter GitHub login');
    const button = getByText('Submit');

    fireEvent.changeText(input, 'testuser');
    fireEvent.press(button);

    await waitFor(() => {
      const actions = store.getActions();

      expect(actions).toHaveLength(1);
      expect(actions[0].type).toBe('search/fetchUsers/pending');
      expect(actions[0].payload).toEqual({login: 'testuser', page: 1});
    });
  });
});
