import React from 'react';
import Champion from './Champion';
import store from '../store/store';
import { add } from '../store/actions';

export default class Champions extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(champion) {
    store.dispatch(add(champion));
  }
  createChampions() {
    let championsArray = [];
    let champions = store.getState().champions;
    for (let i=0; i<champions.length; i++) {
      if (i !== 0 && champions[i-1].level !== champions[i].level) championsArray.push(<div key={i+1000} className={"clearfix"} />)
      championsArray.push(<Champion key={i} champion={champions[i]} onClick={this.handleClick}/>);
    }
    return championsArray;
  }
  render() {
    return (
      <div>
        <h2 className="component-heading"> Pick a champion: </h2>
        <div className="flex-container champions-wrapper">
          {this.createChampions()}
        </div>
      </div>
    );
  }
}