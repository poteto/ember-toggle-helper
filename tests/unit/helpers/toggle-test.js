import Ember from 'ember';
import { toggle } from '../../../helpers/toggle';
import { module, test } from 'qunit';

const { Object: EmberObject, get } = Ember;

module('Unit | Helper | toggle');

test('it toggles the property', function(assert) {
  let Person = EmberObject.extend({
    isAlive: false
  });
  let jimBob = Person.create();
  let action = toggle([jimBob, 'isAlive']);
  action();

  assert.ok(get(jimBob, 'isAlive'), 'it toggles the property');
});
