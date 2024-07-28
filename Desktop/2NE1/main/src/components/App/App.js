import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { MealProvider } from '../../MealContext'; 
import Login from '../../pages/Login/Login'; 
import Join from '../../pages/Join/Join'; 
import JoinGeneral from '../../pages/JoinGerneral/join-general'; 
import Main from '../../pages/Main/main'; // src/pages/Main/Main.js
import MealRecord from '../../pages/MealRecord/MealRecord';
import MealGuide from '../../pages/MealGuide/MealGuide';
import MealEnd from '../../pages/MealEnd/MealEnd';
import CombinedMealReport from '../../pages/CombinedMealReport/CombinedMealReport'; // src 폴더 바로 아래에 있는 파일이므로 두 단계 위로 이동

function App() {
  return (
    <MealProvider>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/join" element={<Join />} />
        <Route path="/join-general" element={<JoinGeneral />} />
        <Route path="/main" element={<Main />} />
        <Route path="/meal-record" element={<MealRecord />} />
        <Route path="/meal-guide" element={<MealGuide />} />
        <Route path="/meal-end" element={<MealEnd />} />
        <Route path="/meal-report/:mealId" element={<CombinedMealReport />} />
        <Route path="/mypage" element={<div>마이 페이지</div>} />
        <Route path="/settings" element={<div>설정 페이지</div>} />
        <Route path="/combined-meal-report/:mealId" element={<CombinedMealReport />} /> {/* 추가된 부분 */}
      </Routes>
    </MealProvider>
  );
}

export default App;
