import React from 'react';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';
import SearchComponent from './src/components/SearchComponent';
import ResultsComponent from './src/components/ResultsComponent';

const App = () => (
  <Provider store={store}>
    <SearchComponent />
    <ResultsComponent />
  </Provider>
);

export default App;
