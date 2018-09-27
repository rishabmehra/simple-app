import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Dashboard from './containers/Dashboard';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { logger } from 'redux-logger';
import rootSaga from './sagas';
import rootReducers from './reducers';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './containers/login';

 // imported saga middleware
const sagaMiddleware = createSagaMiddleware();
// creating the redux store instance
const store = createStore(
    rootReducers,
   applyMiddleware(sagaMiddleware, logger),
);
// bind rootSaga file with saga middleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(
<Provider store={store}>
 <Router>
   <div>
    <Route exact path="/dashboard" component={Dashboard} />
    <Route path="/login" component={Login} />
   </div>  
 </Router>  
</Provider>
, document.getElementById('root'));
registerServiceWorker();
