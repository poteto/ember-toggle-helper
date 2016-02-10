import Ember from 'ember';

const {
  Object: EmberObject,
  Route,
  set
} = Ember;

export default Route.extend({
  model() {
    return [
      EmberObject.create({ name: 'Jim Bob', isSuspended: false }),
      EmberObject.create({ name: 'Mary Ann', isSuspended: true }),
      EmberObject.create({ name: 'Bobby Joe', isSuspended: false })
    ];
  },

  setupController(controller, model) {
    set(controller, 'employees', model);
  }
});
