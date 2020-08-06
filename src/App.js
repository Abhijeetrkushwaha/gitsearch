import React from 'react';
import Search from './components/Search';
import DashBoard from './components/DashBoard';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom'

function App() { 
  return (
    <BrowserRouter>
      <div className="git-search">
        <Route exact path='/' component={Search} />
        <Route path='/:user' component={DashBoard} />
        
      </div>
    </BrowserRouter>
  );
}

export default App;
