import React from 'react';

export default class Champion extends React.Component {
  render() {
    let champion = this.props.champion;
    let src = "./icons/"+ champion.name + "Square.png";
    let attributeOne = {
      background: "rgba(0,0,0,0.7) url('./icons/" + champion.attributes[0] + ".png') center / cover"
    }
    let attributeTwo = {
      background: "rgba(0,0,0,0.7) url('./icons/" + champion.attributes[1] + ".png') center / cover"
    }
    return (
      <div className={"champion-wrapper level" + champion.level} onClick={() => this.props.onClick(champion.name)}>
        <div className="mini-buff-container">
          <div className="mini-buff" style={attributeOne}></div>
          <div className="mini-buff" style={attributeTwo}></div>
        </div>
        <img src={src} alt={champion.name} />
      </div>
    );
  }
}
