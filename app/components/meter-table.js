import Component from '@glimmer/component';
import { inject as service } from '@ember/service';

const sortCombatantsWithHealedFocus = (combatants) => {
  return combatants
    .filter((c) => Number(c.healed))
    .sort((c1, c2) => Number(c2.healed) - Number(c1.healed));
};

export default class MeterTableComponent extends Component {
  @service overlayEventService;

  get combatants() {
    if (this.args.focus === 'hps') {
      return sortCombatantsWithHealedFocus(this.overlayEventService.combatants);
    } else {
      return this.overlayEventService.combatants;
    }
  }

  get encounter() {
    return this.overlayEventService.encounter;
  }

  get encounterIsActive() {
    return this.overlayEventService.encounterIsActive;
  }
}
