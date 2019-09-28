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
    let borderColor;
    let scale = (this.props.active) ? 0:1;
    if (this.props.buff.current + 2 + scale >= this.props.buff.steps.length) borderColor = 'rgb(205, 127, 50)';
    if (this.props.buff.current + 1 + scale >= this.props.buff.steps.length) borderColor = 'rgb(192,192,192)';
    if (this.props.buff.current + scale >= this.props.buff.steps.length) borderColor = 'rgb(255, 215, 0)';    
    let style = {
      backgroundImage: "url('./icons/" + this.props.buff.name + ".png')",
    };
    let border = {
      borderColor: borderColor
    }
    buff.push(
      <div key={1000} className="hexagon" style={{...style, ...border}}>
        <div className="hexTop" style={border}></div>
        <div className="hexBottom" style={border}></div>
      </div>
    );
    if (this.props.active) return buff;
    for (let i=0; i<champions.length; i++) {
      let champion = championsArray.find((element) => element.name === champions[i]);
      if (!team.find((element) => element.name === champion.name)) {
        buff.push(<Champion key={i} champion={champion} onClick={this.handleClick}/>);
      }
    }
    return buff;
  }
  render() {
    let className = (this.props.active) ? "" : "flex-container buffs-margin";
    return (
      <div className={className}>
        {this.createBuff()}
      </div>
    );
  }
}