import Route from '@ember/routing/route';

export default Route.extend({
  isDisabled:true,
  model() {
    return this.store.findAll('user');
  },
  actions: {
    deleteUser(userId) {
      return this.get('store').findRecord('user', userId, { reload: true }).then((user) => {
        user.destroyRecord();
      });
    },
    updateUser(userId, firstName, lastName) {
      this.get('store').findRecord('user', userId).then((user)  => {
        if (firstName) {
          user.set('firstName', firstName);
        }
        if (lastName) {
          user.set('lastName', lastName);
        }
        user.save();
      });
    }
  }
});
