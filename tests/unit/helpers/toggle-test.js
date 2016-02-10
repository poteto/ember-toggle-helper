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

  assert.ok(get(jimBob, 'isAlive') === true, 'it toggles the property');
});

test('it toggles the property of a POJO', function(assert) {
  let jimBob = {
    isAlive: false
  };
  let action = toggle([jimBob, 'isAlive']);
  action();

  assert.ok(get(jimBob, 'isAlive') === true, 'it toggles the property of a POJO');
});

test('it correctly toggles non-boolean falsy values', function(assert) {
  let jimBob = {
    isAlive: undefined
  };
  let action = toggle([jimBob, 'isAlive']);
  action();

  assert.ok(get(jimBob, 'isAlive') === true, 'it toggles the property of a POJO');
});

test('it correctly toggles non-boolean truthy values', function(assert) {
  let jimBob = {
    isAlive: {}
  };
  let action = toggle([jimBob, 'isAlive']);
  action();

  assert.ok(get(jimBob, 'isAlive') === false, 'it toggles the property of a POJO');
});