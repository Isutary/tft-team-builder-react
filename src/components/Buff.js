import React from 'react';
import Champion from './Champion';
import store from '../store/store';
import { add } from '../store/actions';

export default class Buff extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(champion) {
    store.dispatch(add(champion));
  }
  createBuff() {
    let buff = [];
    let champions = this.props.buff.champions;
    let championsArray = store.getState().champions;
    let team = store.getState().team;
    buff.push(
      <div key={1000} className="buff-icon-wrapper">
        <img src={"./icons/"+ this.props.buff.name + ".png"} alt={this.props.buff.name} />
      </div>
    );
    for (let i=0; i<champions.length; i++) {
      let champion = championsArray.find((element) => element.name === champions[i]);
      if (!team.find((element) => element.name === champion.name)) {
        buff.push(<Champion key={i} champion={champion} onClick={this.handleClick}/>);
      }
    }
    return buff;
  }
  render() {
    return (
      <div className="flex-container">
        {this.createBuff()}
      </div>
    );
  }
}