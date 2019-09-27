import React from 'react';
import Champion from './Champion';
import store from '../store/store';
import { remove } from '../store/actions';

export default class Team extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(champion) {
    store.dispatch(remove(champion));
  }
  createTeam() {
    let team = [];
    let champions = store.getState().team;
    for (let i=0; i<champions.length; i++) team.push(<Champion key={i} champion={champions[i]} onClick={this.handleClick}/>);
    return team;
  }
  componentDidMount() {
    store.subscribe(() => this.forceUpdate());
  }
  render() {
    return (
      <div className="component-wrapper height-fix">
        <h2 className="component-heading"> Your team: </h2>
        <div className="flex-container">
          {this.createTeam()}
        </div>
      </div>
    );
  }
}