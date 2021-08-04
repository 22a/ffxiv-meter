import Service from '@ember/service';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import {
  combatants as exampleCombatants,
  encounter as exampleEncounter,
} from 'ffxiv-meter/lib/example-data-large';
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
  combatants = enrichCombatants(exampleCombatants);

  @tracked
  encounter = exampleEncounter;

  @action
  onCombatDataEvent(combatDataEvent) {
    console.log(combatDataEvent);
    this.combatants = enrichCombatants(
      Object.values(combatDataEvent.Combatant)
    );
    this.encounter = combatDataEvent.Encounter;
  }
}
