import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DisplayCocktail from './components/DisplayCocktails';
import Navbar from './components/Navbar';
import CocktailTable from './components/TableCocktails';
import AddCocktailForm from './components/AddCocktailForm';
import './App.css';

function App() {
  const [cocktails, setCocktails] = useState([]);

  const addCocktail = (cocktail) => {
    setCocktails([...cocktails, cocktail]);
  };

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<DisplayCocktail />} />
          <Route path="/products" element={<DisplayCocktail />} />
          <Route
            path="/table"
            element={<CocktailTable cocktails={cocktails} setCocktails={setCocktails} />}
          />
          <Route
            path="/form"
            element={<AddCocktailForm onAdd={addCocktail} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
