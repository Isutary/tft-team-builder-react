import React from 'react';
import Champions from './components/Champions';
import Team from './components/Team';
import Buffs from './components/Buffs';
import './App.css';

export default function App() {
  return (
    <div className="app-wrapper">
      <h1> <span>TFT</span>team builder </h1>
      <Champions />
      <Team />
      <Buffs />
    </div>
  );
}
