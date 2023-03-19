import React, { useState, useEffect } from 'react';
import Route from './components/Route';
import './App.css';
import Loader from './components/Loader';


function App() {

  const [loader, setLoader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 1500)
  }, [])

  return loader ? (
    <Loader/>
  ):
  (
    <div className="App">
     <Route/>
     
    </div>
  );
}

export default App;
