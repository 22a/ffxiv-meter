import Service from '@ember/service';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import exampleCombatData from 'ffxiv-meter/lib/example-combat-data';
import { enrichCombatants } from 'ffxiv-meter/lib/event-data-transforms';

const LOAD_EXAMPLE_DATA = true;

export default class OverlayEventServiceService extends Service {
  constructor() {
    super();
    window.addOverlayListener('CombatData', this.onCombatDataEvent);
    window.startOverlayEvents();
    if (LOAD_EXAMPLE_DATA) {
      this.rawCombatData = exampleCombatData;
      this.combatants = enrichCombatants(
        Object.values(exampleCombatData.Combatant)
      );
      this.encounter = exampleCombatData.Encounter;
      this.encounterIsActive = exampleCombatData.isActive;
    }
  }

  willDestroy() {
    window.removeOverlayListener('CombatData', this.onCombatDataEvent);
    super.willDestroy();
  }

  @tracked
  rawCombatData = {};

  @tracked
  combatants = [];

  @tracked
  encounter = {};

  @tracked
  encounterIsActive = false;

  @action
  onCombatDataEvent(combatDataEvent) {
    this.rawCombatData = combatDataEvent;
    this.combatants = enrichCombatants(
      Object.values(combatDataEvent.Combatant)
    );
    this.encounter = combatDataEvent.Encounter;
    this.encounterIsActive = combatDataEvent.isActive;
  }

  @action
  logCombatData() {
    console.log(this.rawCombatData);
  }

  @action
  clearCombatData() {
    this.rawCombatData = {};
    this.combatants = [];
    this.encounter = {};
    this.encounterIsActive = false;
  }
}
