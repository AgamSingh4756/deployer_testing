import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainContent from './MainContent';
import SignInPage from './routes/Signin';
import LogInPage from './routes/LogInPage';
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainContent />} />
        < Route path='/SignIn' element={<SignInPage/>}/> 
        <Route path='/LogInPage' element={<LogInPage/>}/>
      </Routes>
    </div>
  );
}

export default App;