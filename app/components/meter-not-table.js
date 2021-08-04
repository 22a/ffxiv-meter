import Component from '@glimmer/component';
import { inject as service } from '@ember/service';

export default class MeterNotTableComponent extends Component {
  @service overlayEventService;

  get combatants() {
    return this.overlayEventService.combatants;
  }

  columns = [
    { title: '', value: 'Job', class: 'min-w-5 pl-1 pr-2 font-mono' },
    { title: '', value: 'name', class: 'w-full' },
    {
      title: 'dps',
      value: 'humanReadableDps',
      class: 'text-right min-w-4 pr-2 font-mono',
    },
    {
      title: '',
      value: 'humanReadableDamage',
      class: 'text-right min-w-4 pr-1 font-mono',
    },
  ];
}
