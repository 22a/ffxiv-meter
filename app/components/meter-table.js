import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import humanFormat from 'human-format';
import {
  combatantData as exampleCombatantData,
  encounterData as exampleEncounterData,
} from 'ffxiv-meter/lib/example-data-medium';

const humanFormatConfig = {
  decimals: 1,
  separator: '',
};

let acronymToJobNameMapping = {
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
};

let acronymToIconFilepath = (jobNameAcronym) => {
  let jobName = acronymToJobNameMapping[jobNameAcronym.toUpperCase()];
  return `/images/job-icons/10/${jobName.replace(' ', '_')}_Icon_10.png`;
};

let enrichCombatantData = (combatantData) => {
  return combatantData.map((data) => {
    data.jobIconFilepath = acronymToIconFilepath(data.Job);
    data.humanReadableDamage = humanFormat(
      Number(data.damage),
      humanFormatConfig
    );
    data.humanReadableDps = humanFormat(Number(data.DPS), humanFormatConfig);
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
