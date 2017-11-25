import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('user', { path: '/user/:userId' });
  this.route('order', { path: '/order/:orderId' });
});

export default Router;
