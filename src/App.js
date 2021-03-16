import React from 'react';
import './App.css';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import EmployeeData from './components/EmployeeData';

function App() {
  return (
    <div>
      <Header />
      <SearchBar />
      <EmployeeData />
    </div>
  );
}

export default App;
