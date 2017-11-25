import Route from '@ember/routing/route';
import Ember from 'ember';

export default Route.extend({
  model(params) {
    return this.get('store').findRecord('user', params.userId,  {
      include: 'orders'
    }).then((model) => {
      Ember.Logger.info(model.orders);
    });
  }
});
