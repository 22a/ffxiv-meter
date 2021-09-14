import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | horizontal', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:horizontal');
    assert.ok(route);
  });
});
