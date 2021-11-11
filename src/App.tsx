import React from 'react';
import './App.css';
import Communities from './components/Communities/Communities';
import Homes from './components/Homes/Homes';
import SearchAppBar from './components/SearchAppBar/SearchAppBar';

function App() {
  return (
    <div className="App">
      <SearchAppBar />
      <Communities /> 
      <Homes />
    </div>

  );
}

export default App;
