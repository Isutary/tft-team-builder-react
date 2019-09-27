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
      <header className="header-wrapper">
        <div onClick={() => store.dispatch(reset())} className="logo-wrapper"></div>
        <div className="heading-wrapper">
          <h1 className="heading"> TEAM BUILDER </h1>
        </div>
      </header>
      <Champions />
      <Team />
      <Active />
      <Buffs />
    </div>
  );
}
