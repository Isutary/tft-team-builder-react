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
  handleMouseMove(event) {
    let tooltip = event.currentTarget.children[2];
    let rect = event.currentTarget.getBoundingClientRect();
    let x = event.clientX - rect.left + 10;
    let y = event.clientY - rect.top + 10; 
    if (event.clientX + tooltip.clientWidth + 15 < document.body.clientWidth) tooltip.style.left = x + 'px'; 
    else tooltip.style.left = document.body.clientWidth - tooltip.clientWidth - rect.left - 15 + 'px';
    if (event.clientY + tooltip.clientHeight < document.body.clientHeight) tooltip.style.top = y + 'px';
    else tooltip.style.top = document.body.clientHeight - tooltip.clientHeight - rect.top + 'px';
  }
  createPerks() {
    let array = [];
    let perks = this.props.buff.perks;
    for (let i=0; i<perks.length; i++) {
      let style = {
        color: 'grey'
      }
      if (this.props.buff.current > i) style.color = 'white';
      array.push(
        <span key={i} className="buff-step" style={style}>
          {perks[i]}
        </span>
      );
    }
    return array;
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
    let icon = {
      background: "url('./icons/" + this.props.buff.name + ".png') 5px center no-repeat / contain"
    }
    buff.push(
      <div key={1000} 
        onMouseMove={this.handleMouseMove}
        className="hexagon" style={{...style, ...border}}
      >
        <div className="hexTop" style={border}></div>
        <div className="hexBottom" style={border}></div>
        <div className="buff-tooltip">
          <div className="buff-name" style={icon}> {this.props.buff.name} </div>
          <div className="buff-description">
            {this.props.buff.description}
          </div>
          <div className="buff-steps">
            {this.createPerks()}
          </div>
        </div>
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