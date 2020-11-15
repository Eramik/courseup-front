import React from 'react';
import ReactDOM from 'react-dom';

// Main app
import App from './App';

// React Router
import { BrowserRouter as Router } from 'react-router-dom';

// Redux
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './store/reducer';

// Other
import * as serviceWorker from './serviceWorker';
import './index.css';

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const app = (
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>
);

ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
