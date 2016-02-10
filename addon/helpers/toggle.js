import Ember from 'ember';

const { Helper: { helper } } = Ember;

export function toggle([obj, prop]) {
  return function() {
    obj.toggleProperty(prop);
  };
}

export default helper(toggle);
