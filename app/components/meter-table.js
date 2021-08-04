import Component from '@glimmer/component';
import { inject as service } from '@ember/service';

export default class MeterTableComponent extends Component {
  @service overlayEventService;

  get combatants() {
    return this.overlayEventService.combatants;
  }

  columns = [
    // { title: '', value: 'rank' },
    { title: '', value: 'Job' },
    { title: '', value: 'name' },
    { title: 'dps', value: 'humanReadableDps', align: 'right' },
    { title: '', value: 'humanReadableDamage', align: 'right' },
  ];
}
