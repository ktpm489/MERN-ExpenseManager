import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom'
import Routes from './routes'
/* ReactDOM.render(<App />, document.getElementById('root')); */

ReactDOM.render(
        <HashRouter>
            <Routes />
        </HashRouter>, document.getElementById('root'));
