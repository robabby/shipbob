import Route from '@ember/routing/route';
import RSVP from 'rsvp';

export default Route.extend({
  model() {
    let { userId } = this.paramsFor('user');

    return RSVP.hash({
      user: this.get('store').peekRecord('user', userId, { reload: true }),
      orders: this.store.query('order', { userId }, { reload: true })
    });
  },
  actions: {
    refresh() {
      this.refresh()
    }
  }
});
