import Component from '@glimmer/component';
import { inject as service } from '@ember/service';

const sortCombatantsWithHealedFocus = (combatants) => {
  return combatants
    .filter((combatant) => Number(combatant.healed) > 0)
    .sort((c1, c2) => Number(c2.healed) - Number(c1.healed))
    .map((combatant, index) => {
      // TODO: use hbs loop index instead of computing this manually
      combatant.healedRank = index + 1;
      return combatant;
    });
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
}
