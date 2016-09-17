import set from 'ember-metal/set';
import Controller from 'ember-controller';
import { trackEvent } from 'metrics-decorators';

export default Controller.extend({
  actions: {
    @trackEvent('GoogleAnalytics', 'action', 'submit', 'sign up form')
    handleSubmit(id) {
      set(this, 'model.id', id);
    }
  }
});
