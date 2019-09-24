import React from 'react';
import Buff from './Buff';
import store from '../store/store';

export default class Buffs extends React.Component {
  createBuffs() {
    let buffsArray = [];
    let buffs = store.getState().buffs;
    for (let i=0; i<buffs.length; i++) {
      if (buffs[i].show) buffsArray.push(<Buff key={i} buff={buffs[i]} active={false} />)
    }
    return buffsArray;
  }
  componentDidMount() {
    store.subscribe(() => this.forceUpdate());
  }  
  render() {
    return (
      <div>
        <h2 className="component-heading"> You need: </h2>
        <div>
          {this.createBuffs()}
        </div>
      </div>
    );
  }
}