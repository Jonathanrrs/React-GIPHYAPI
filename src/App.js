import React, {useState} from 'react';
import './App.css';
import ListOfGifs from './components/ListOfGifs';

import { Link ,Route } from "wouter"; 

function App() {
  const [keyword, setKeyword] = useState('cr7');
 return (
    <div className="App">
      <section className="App-content">
        <h1>App</h1>
        <Link to='/gif/cr7'>Gifs Cr7</Link> {/* Esto es por en lugar de etiqueta a y adentro href lo cambiamos por la herramientra de wouter, que seria Link y href sería to, porque con la etiqueta a la página se refresca, y con wouter se mantiene en una single page aplication  */}
        <Link to='/gif/apple'>Gifs Apple</Link>
      <Route path="/gif/:keyword" component={ListOfGifs }/>
      </section>
    </div>
  );
}

export default App;
