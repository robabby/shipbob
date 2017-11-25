import DS from 'ember-data';
import ENV from '../config/environment';

export default DS.RESTAdapter.extend({
  namespace: 'api',
  host: ENV.APP.apiURL,
  headers: {
    "Content-Type": "application/json"
  }
});
