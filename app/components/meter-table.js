import Component from '@glimmer/component';
import { inject as service } from '@ember/service';

export default class MeterTableComponent extends Component {
  @service overlayEventService;

  get combatants() {
    return this.overlayEventService.combatants;
  }

  columns = [
    { title: '', value: 'Job', class: 'min-w-5 pr-2 font-mono' },
    { title: '', value: 'name', class: 'min-w-12 w-full whitespace-nowrap' },
    {
      title: 'dps',
      value: 'humanReadableDps',
      class: 'text-right min-w-4 pr-2 font-mono',
    },
    {
      title: '',
      value: 'humanReadableDamage',
      class: 'text-right min-w-4 pr-1 font-mono text-sm opacity-80',
    },
  ];
}
