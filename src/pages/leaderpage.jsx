import React from 'react';
import './Leaderpage.css';

const Leaderboard = ({ data }) => {
  return (
    <div className="leaderboard-container">
      <h1>LeaderBoards</h1>
      <div className="leaderboard">
        <div className="leaderboard-header">
          <div className="header-item">Rank</div>
          <div className="header-item">Name</div>
          <div className="header-item">Calmar Ratio</div>
          <div className="header-item">Overall Profit</div>
          <div className="header-item">Avg. Daily Profit</div>
          <div className="header-item">Win % (Day)</div>
          <div className="header-item">Price (Rs)</div>
          <div className="header-item">Action</div>
        </div>
        {data.map((item, index) => (
          <div className={`leaderboard-row ${index % 2 === 0 ? 'even' : 'odd'}`} key={item.rank}>
            <div className="row-item">{item.rank}</div>
            <div className="row-item">{item.name}</div>
            <div className="row-item">{item.calmarRatio}</div>
            <div className="row-item">{item.overallProfit}</div>
            <div className="row-item">{item.avgDailyProfit}</div>
            <div className="row-item">{item.winPercentage}</div>
            <div className="row-item">{item.price || '-'}</div>
            <div className="row-item">
              <button className="action-button">
                {item.price ? 'Buy' : 'View'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Leaderboard;
