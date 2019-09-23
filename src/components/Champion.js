import React from 'react';

export default function Champion(props) {
  let champion = props.champion;
  let src = "./icons/"+ champion.name + "Square.png";
  return (
    <div className={"champion-wrapper level" + champion.level} onClick={() => props.onClick(champion.name)}>
      <img src={src} alt={champion.name} />
    </div>
  );
}
