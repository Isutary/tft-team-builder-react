import React from 'react';
import Buff from './Buff';
import store from '../store/store';

export default class Active extends React.Component {
  createActive() {
    let active = [];
    let buffs = store.getState().buffs;
    for (let i=0; i<buffs.length; i++) {
      if (buffs[i].current !== 0) {
        active.push(
          <div key={i}> 
            <Buff buff={buffs[i]} active={true} />
            <p className="active-count"> {buffs[i].active.length} </p>
          </div>
        );
      }
    }
    return active;
  }
  componentDidMount() {
    store.subscribe(() => this.forceUpdate());
  }
  render() {
    return (
      <div>
        <h2 className="component-heading"> You have: </h2>
        <div className="flex-container">
          {this.createActive()}
        </div>
      </div>
    );
  }
}