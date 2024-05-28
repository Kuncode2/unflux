import React, { useState } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  const [set, setState] = useState("leader");

  return (
    <div className="header-container">
      <div className="header">
        <img src="/logo_uf.png" alt="Logo" className="logo" />
        <div className="right-icons">
          <img src="/bell.png" alt="Notifications" className="icon" />
          <img src="/coin.jpeg" alt="Coins" className="icon" />
          <span className="coin-count">0</span>
          <img src="/avatar.jpg" alt="User Avatar" className="avatar" />
        </div>
      </div>

      <nav className="nav-menu">
        <ul>
          <li onClick={() => { setState("leader") }}>
            <img src="/logo2.png" alt="Shape" className="menu-icon" />
            <Link to="/leaderboard">LeaderBoard{set === "leader" ? <hr /> : <></>}</Link>
          </li>
          <li onClick={() => { setState("historical") }}><a href="historical-trading">Historical Trading{set === "historical" ? <hr /> : <></>} </a></li>
          <li onClick={() => { setState("chart") }}><a href="#historical-chart">Historical Chart{set === "chart" ? <hr /> : <></>}</a></li>
          <li onClick={() => { setState("scanner") }}><a href="#scanners">Scanners{set === "scanner" ? <hr /> : <></>}</a></li>
          <li onClick={() => { setState("alert") }}><a href="#alerts">Alerts{set === "alert" ? <hr /> : <></>}</a></li>
          <li onClick={() => { setState("basic") }}><a href="#basic-backtest">Basic Backtest{set === "basic" ? <hr /> : <></>}</a></li>
          <li onClick={() => { setState("advanced") }}><a href="#advanced-backtest">Advanced Backtest{set === "advanced" ? <hr /> : <></>}</a></li>
          <li onClick={() => { setState("price") }}><a href="#pricing">Pricing{set === "price" ? <hr /> : <></>}</a></li>
          <li onClick={() => { setState("earnings") }}><a href="#my-earnings">My Earnings{set === "earnings" ? <hr /> : <></>}</a></li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
