import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import approximateNumber from 'approximate-number';
import {
  combatantData as exampleCombatantData,
  encounterData as exampleEncounterData,
} from 'ffxiv-meter/lib/example-data-large';

const acronymToJobName = (jobNameAcronym) => {
  let acronymToJobNameMapping = {
    ARC: 'Archer',
    GLA: 'Gladiator',
    LNC: 'Lancer',
    MRD: 'Marauder',
    PGL: 'Pugilist',
    ACN: 'Arcanist',
    CNJ: 'Conjurer',
    THM: 'Thaumaturge',
    ROG: 'Rogue',
    //
    BRD: 'Bard',
    DRG: 'Dragoon',
    MNK: 'Monk',
    PLD: 'Paladin',
    WAR: 'Warrior',
    BLM: 'Black Mage',
    WHM: 'White Mage',
    SCH: 'Scholar',
    SMN: 'Summoner',
    NIN: 'Ninja',
    AST: 'Astrologian',
    DRK: 'Dark Knight',
    MCH: 'Machinist',
    RDM: 'Red Mage',
    SAM: 'Samurai',
    BLU: 'Blue Mage',
    GNB: 'Gunbreaker',
    DNC: 'Dancer',
    //
    LB: 'Limit Break',
  };

  return acronymToJobNameMapping[jobNameAcronym.toUpperCase()];
};

let acronymToIconFilepath = (jobNameAcronym) => {
  let jobName = acronymToJobName(jobNameAcronym);
  return `/images/job-icons/10/${jobName.replace(' ', '_')}_Icon_10.png`;
};

const toHumanReadable = (num) => {
  if (num === '∞') return '';
  return approximateNumber(Number(num));
};

let enrichCombatantData = (combatantData) => {
  let maxDmg = combatantData[0] && combatantData[0].damage;
  return combatantData.map((data, i) => {
    console.log(data);
    if (data.Job === '') data.Job = 'LB';
    let jobName = acronymToJobName(data.Job);
    data.jobName = jobName;
    data.jobNameNoSpace = jobName.replace(' ', '');
    data.jobIconFilepath = acronymToIconFilepath(data.Job);
    data.humanReadableDamage = toHumanReadable(data.damage);
    data.humanReadableDps = toHumanReadable(data.DPS);
    data.rank = i + 1;
    data.percentageOfMaxDmg = Math.floor((data.damage / maxDmg) * 100);

    console.log(data);
    return data;
  });
};

export default class MeterTableComponent extends Component {
  @tracked
  combatantData = enrichCombatantData(exampleCombatantData);
  @tracked
  encounterData = exampleEncounterData;

  columns = [
    { title: '', value: 'Job' },
    { title: '', value: 'name' },
    { title: 'dps', value: 'humanReadableDps', align: 'right' },
    { title: '', value: 'humanReadableDamage', align: 'right' },
  ];

  @action
  onCombatDataEvent(combatDataEvent) {
    console.log(combatDataEvent);
    this.combatantData = Object.values(combatDataEvent.Combatant);
    this.encounterData = combatDataEvent.Encounter;
    console.log({
      combatantData: this.combatantData,
      encounterData: this.encounterData,
    });
  }
}
