import Route from '@ember/routing/route';

export default Route.extend({
  model(params) {
    let { userId } = this.paramsFor('user');
    this.get('store').findRecord('user', userId,  {
      include: 'orders'
    });

    return Ember.RSVP.hash({
      user: this.get('store').findRecord('user', userId, {
        include: 'orders'
      }),
      order: this.store.peekRecord('order', userId)
    });
  }
});
