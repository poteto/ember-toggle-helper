import { test } from 'qunit';
import moduleForAcceptance from '../../tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | employees');

test('visiting /employees', function(assert) {
  visit('/employees');

  andThen(() => { assert.equal(currentURL(), '/employees'); });
  andThen(() => {
    assert.equal(find('li:contains("has been suspended")').length, 1);
    assert.equal(find('li:contains("has not been suspended")').length, 2);
  });
  andThen(() => { click('[data-id="mary-ann-button"]'); });
  andThen(() => {
    assert.equal(find('li:contains("has been suspended")').length, 0);
    assert.equal(find('li:contains("has not been suspended")').length, 3);
  });
});
