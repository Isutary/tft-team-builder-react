import React from 'react';
import Buff from './Buff';
import store from '../store/store';

export default class Active extends React.Component {
  createActive() {
    let active = [];
    let team = store.getState().team;
    for (let champion of team) {
      
    }
  }
  render() {
    return (
      <div className="flex-container">
        {this.createActive()}
      </div>
    );
  }
}