import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from './Home';

function App() {
  return (
    <div className="App">
    	<Router>
			<Switch>
				<Route path="/" exact>
					<Home />
				</Route>
			</Switch>
		</Router>
    </div>
  );
}

export default App;
