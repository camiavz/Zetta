import React from 'react';
import Navbar from './components/Navbar'; 
import ItemListContainer from './components/ItemListContainer'; 

function App() {
  return (
    <div className="App">
      <Navbar /> 
      <ItemListContainer greeting="¡Bienvenidos a Zetta!" />
    </div>
  );
}

export default App;


