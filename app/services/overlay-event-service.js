import Service from '@ember/service';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import exampleCombatData from 'ffxiv-meter/lib/example-payloads/1';
import { enrichCombatants } from 'ffxiv-meter/lib/event-data-transforms';

export default class OverlayEventServiceService extends Service {
  constructor() {
    super();
    window.addOverlayListener('CombatData', this.onCombatDataEvent);
    window.startOverlayEvents();
  }

  willDestroy() {
    window.removeOverlayListener('CombatData', this.onCombatDataEvent);
    super.willDestroy();
  }

  @tracked
  combatants = enrichCombatants(Object.values(exampleCombatData.Combatant));

  @tracked
  encounter = exampleCombatData.Encounter;

  @tracked
  encounterIsActive = exampleCombatData.isActive;

  @action
  onCombatDataEvent(combatDataEvent) {
    if (new URLSearchParams(window.location.search).get('logCombatData')) {
      console.log(combatDataEvent);
    }
    this.combatants = enrichCombatants(
      Object.values(combatDataEvent.Combatant)
    );
    this.encounter = combatDataEvent.Encounter;
    this.encounterIsActive = combatDataEvent.isActive;
  }

  @action
  clearCombatData() {
    this.combatants = [];
    this.encounter = {};
  }
}
