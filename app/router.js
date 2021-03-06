import EmberRouter from '@embroider/router';
import config from 'ffxiv-meter/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('horizontal', { path: '/' });
  this.route('vertical');
});
