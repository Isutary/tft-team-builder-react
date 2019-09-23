import * as champsData from './data/champions.json';

let champions = champsData.default;

export const teamReducer = (team = null, action) => {
  if (action.payload) {
    var champion = champions.find((element) => element.name === action.payload);
  }
  switch (action.type) {
    case 'ADD':
      return team.concat(champion);
    case 'REMOVE':
      let newTeam = team.filter(element => element.name !== action.payload);
      return newTeam;
    default:
      return team;
  }
}

export const buffsReducer = (buffs = null, action) => {
  if (action.payload) {
    var newBuffs = JSON.parse(JSON.stringify(buffs));
    var champion = champions.find((element) => element.name === action.payload);
    var attributes = champion.attributes;
  }
  switch (action.type) {
    case 'ADD':
      newBuffs.forEach(element => {
        if (attributes.includes(element.name)) {
          element.show = false;
          element.active.push(champion);
          if (element.active.length + 1 === element.steps[element.current]) element.show = true;
          if (element.active.length === element.steps[element.current]) element.current++;
        }
      });
      return newBuffs;
    case 'REMOVE':
        newBuffs.forEach(element => {
          if (attributes.includes(element.name)) {
            let active = element.active.filter(element => element.name !== champion.name);
            if (element.active.length !== active) {
              element.show = false;
              element.active = active;
              if (element.active.length < element.steps[element.current] && element.current !== 0) element.current--;
              if (element.active.length + 1 === element.steps[element.current]) element.show = true;
            }
          }
        });
        return newBuffs;
    default: 
      return buffs;
  }
}

export const championsReducer = (champions = null, action) => {
  return champions;
}