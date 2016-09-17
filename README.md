# metrics-decorators

Exposes ember-metrics API as ES7 decorators.

This is inspired/derived from the [ember-computed-decorators project](https://github.com/rwjblue/ember-computed-decorators).

## Setup

* `ember install metrics-decorators`

### Configure

In order to make use of ES7 decorators, you'll need to configure your project to enable babel support for them.

This is as simple as adding the following to `ember-cli-build.js`:

```js
var app = new EmberApp({
  babel: {
    optional: ['es7.decorators']
  }
});
```

## Example

```js
import Route from 'ember-route';
import { trackEvent, trackPage, invoke } from 'metrics-decorators';

export default Route.extend({
  actions: {
    @trackEvent('GoogleAnalytics', 'action', 'submit', 'sign up form')
    handleSubmit(model) {
      return model.save();
    },

    @invoke('trackLink', 'Piwik', { linkType: 'download' })
    saveForm(model) {
      return model.download();
    }
  },

  @trackPage('GoogleAnalytics', 'sign up form')
  model() {
    return this.store.createRecord('user');
  }
})
```

## Installation

* `git clone <repository-url>` this repository
* `cd metrics-decorators`
* `npm install`
* `bower install`

## Running

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

## Running Tests

* `npm test` (Runs `ember try:each` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [http://ember-cli.com/](http://ember-cli.com/).
