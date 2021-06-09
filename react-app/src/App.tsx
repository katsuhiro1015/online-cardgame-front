import * as React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Top from './components/pages/Top';
import InsiderMain from './components/pages/InsiderMain';

function App(): React.ReactElement {
    return (
        <div className="App">
            <header className="App-header">
                <Router>
                    <div>
                        <Route exact path="/" component={Top} />
                        <Route path="/insider" component={InsiderMain} />
                    </div>
                </Router>
            </header>
        </div>
    );
}

export default App;
