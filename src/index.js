import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from './containers/AppContainer';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import './index.css';

import slideReducer from './reducers/slideReducer';
import todoReducer from './reducers/todoReducer';

const store = createStore(
    combineReducers({slideReducer, todoReducer}),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
    <Provider store={store}>
        <AppContainer/>
    </Provider>,
    document.getElementById('root')
);

if (module.hot) {
  module.hot.accept('./containers/AppContainer', () => {
    const NextApp = require('./containers/AppContainer').default;
    ReactDOM.render(
        <Provider store={store}>
            <NextApp />
        </Provider>,
      document.getElementById('root')
    );
  });
}