import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    let { userId } = this.paramsFor('user');
    return this.get('store').findRecord('user', userId,  {
      include: 'orders'
    });
  },
  actions: {
    refresh() {
      this.refresh()
    }
  }
});
