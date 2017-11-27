import Route from '@ember/routing/route';

export default Route.extend({
  model(params) {
    const { orderId } = params;
    const { userId } = this.paramsFor('user');

    return Ember.RSVP.hash({
      user: this.store.peekRecord('user', userId),
      order: this.store.findRecord('order', orderId, { include: userId, reload: true })
    });
  }
});
