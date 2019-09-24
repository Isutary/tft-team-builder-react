import React from 'react';
import Champions from './components/Champions';
import Team from './components/Team';
import Active from './components/Active';
import Buffs from './components/Buffs';
import store from './store/store';
import { reset } from './store/actions';
import './App.css';

export default function App(props) {
  return (
    <div className="app-wrapper">
      <h1 className="heading" onClick={() => store.dispatch(reset())}> <span>TFT</span>team builder </h1>
      <Champions />
      <Team />
      <Active />
      <Buffs />
    </div>
  );
}
