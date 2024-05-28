import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Leaderboard from './pages/leaderpage';

const data = [
  { rank: 1, name: 'Selling with re entr', calmarRatio: 3.96, overallProfit: 381845, avgDailyProfit: 319.54, winPercentage: 0.65, price: null },
  { rank: 2, name: 'strategy_name', calmarRatio: 3.62, overallProfit: 268872.5, avgDailyProfit: 216.31, winPercentage: 0.64, price: 500 },
  { rank: 3, name: 'Based on premium and', calmarRatio: 3.42, overallProfit: 255425, avgDailyProfit: 208.51, winPercentage: 0.64, price: null },
  { rank: 4, name: 'strategy_name', calmarRatio: 3.22, overallProfit: 370845, avgDailyProfit: 303.47, winPercentage: 0.65, price: null },
  { rank: 5, name: 'strategy_name', calmarRatio: 3.22, overallProfit: 370845, avgDailyProfit: 303.47, winPercentage: 0.65, price: null },
  { rank: 6, name: 'Based on premium wit', calmarRatio: 3.01, overallProfit: 135980, avgDailyProfit: 185.77, winPercentage: 0.49, price: null },
  { rank: 7, name: 'strategy_name', calmarRatio: 2.76, overallProfit: 267867.5, avgDailyProfit: 218.49, winPercentage: 0.6, price: null },
  { rank: 8, name: 'Wait and trade_Save', calmarRatio: 2.62, overallProfit: 178525.5, avgDailyProfit: 161.9, winPercentage: 0.63, price: null },
  { rank: 9, name: 'iron condor', calmarRatio: 2.44, overallProfit: 176420, avgDailyProfit: 137.51, winPercentage: 0.65, price: null },
  { rank: 10, name: 'strategy_name', calmarRatio: 2.04, overallProfit: 244555, avgDailyProfit: 198.66, winPercentage: 0.62, price: null }
];


function App() {
  
  return (
      <Router>
        <Header />
        <Routes>
        <Route path="/leaderboard" element={<Leaderboard data={data} />} />
        </Routes>
      </Router>
    );
  }


export default App;
