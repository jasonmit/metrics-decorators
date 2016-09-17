import { test } from 'qunit';
import Service from 'ember-metrics/services/metrics';
import moduleForAcceptance from '../../tests/helpers/module-for-acceptance';

let lastPage = null;
let lastEvent = null;

moduleForAcceptance('Acceptance | smoke test', {
  beforeEach() {
    Service.reopen({
      trackPage(...args) {
        lastPage = args;
      },
      trackEvent(...args) {
        lastEvent = args;
      }
    });
  },

  afterEach() {
    lastEvent = lastPage = null;
  }
});

test('visiting /smoke-test', function(assert) {
  visit('/');

  andThen(function() {
    assert.equal(currentURL(), '/');
    assert.deepEqual(lastPage, ['GoogleAnalytics', 'sign up form']);

    find('button').click();
    assert.deepEqual(lastEvent, ['GoogleAnalytics', 'action', 'submit', 'sign up form']);
    assert.equal(find('span').text(), 'foobar', 'validates that arguments are provided');
  });
});
