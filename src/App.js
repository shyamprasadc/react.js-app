import React from 'react'; 
import './App.css';
import Contact from './Home';

function App() {
  return (
    <div className="App"> 
      <Contact name="Student" id={{name: "shyam", age: 24}} />
    </div> 
  );
}

export default App;
