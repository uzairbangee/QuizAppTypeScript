import React from 'react';
import Header from './Components/Header';
import Category from "./Components/Category";
import QuizPage from "./Components/QuizPage";
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div>
      <BrowserRouter>
          <Header />
        <Routes>
          <Route path="/" element={<Category />} />
          <Route path="quiz/:category_id/:mode" element={<QuizPage />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
