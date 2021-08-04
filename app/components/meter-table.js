import Component from '@glimmer/component';
import { inject as service } from '@ember/service';

export default class MeterTableComponent extends Component {
  @service overlayEventService;

  get combatants() {
    return this.overlayEventService.combatants;
  }
}
