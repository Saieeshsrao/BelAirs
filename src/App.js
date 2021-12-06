import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import Home from './components/Home/Home';
import NewComponent from './login';
import Book from './book';

import './App.css';

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route path='/login' element={<NewComponent />}/>
          <Route path='/booking' element={<Book />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
