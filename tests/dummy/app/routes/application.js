import Route from 'ember-route';
import { trackPage } from 'metrics-decorators';

export default Route.extend({
  @trackPage('GoogleAnalytics', 'sign up form')
  model() {
    return {};
  }
});
