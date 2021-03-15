import React from 'react';
import FullName from './Component/Profile/FullName';
import Adress from './Component/Profile/Adress';
import ProfilePhoto from './Component/Profile/ProfilPhoto';
import './App.css';

function App() {
  return (
    <div className="App">
      <ProfilePhoto />
     <FullName />
     <Adress />
    </div>
  );
}

export default App;
