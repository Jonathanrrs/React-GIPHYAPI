import React from 'react';
import './App.css';
import Home from './pages/Home';
import SearchResults from './pages/SearchResults';
import Detail from './pages/Detail';
import StaticContext from "./context/StaticContex";
import {GifsContextProvider} from './context/GifsContext';

import { Link, Route } from "wouter"; 

export default function App() {
  return (
    <StaticContext.Provider value={{name: 'Jonathan',
    suscribeteAlCanal: true}}>
    <div className="App">
      <section className="App-content">
        <Link to="/">
          <img className="App-logo" alt="Giffy logo" src="/logo.png"></img>
        </Link>
        <GifsContextProvider>
        <Route
          component={Home}
          path="/"
          >
        </Route>
        <Route
          component={SearchResults}
          path="/search/:keyword"
        >
        </Route>
        <Route
          component={Detail}
          path="/gif/:id"
        >
        </Route>
        </GifsContextProvider>
      </section>
    </div>
    </StaticContext.Provider>
  )
}


