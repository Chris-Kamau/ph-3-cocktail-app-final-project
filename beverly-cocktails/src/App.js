import React from 'react';
import DisplayCocktail from './components/DisplayCocktails';
import './App.css';
import Navbar from './components/Navbar';
// import LiquorTable from './components/TableLiquor';
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import AddLiquorForm from './components/AddLiquorForm';
// import FeedbackForm from './components/FeedbackForm';
// import Footer from './components/Footer';
function App() {
  return (
    <div>
    <BrowserRouter>
  <NavBar />
  <Routes>
  <Route path="/" element={ <DisplayCocktail />}>
  </Route>
  <Route path="/products" element={ <DisplayCocktail />}>
  </Route>
  {/* <Route path="/table" element={ <LiquorTable />}>
  </Route>
  <Route path="/form" element={ <AddLiquorForm />}>
  </Route> */}
  </Routes>
  </BrowserRouter>
  </div>
  );
}
export default App;