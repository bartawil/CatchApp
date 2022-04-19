import React from 'react';
import Home from './Components/Home';
import {BrowserRouter, Routes, Route} from "react-router-dom";


function App() {
  return (
    <div className="container-fluid">
        <BrowserRouter>
            <Routes>          
                <Route exact path='/' element={<Home/>}></Route>
            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App;