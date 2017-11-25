import Controller from '@ember/controller';
import Ember from 'ember';

export default Controller.extend({
  firstName: null,
  lastName: null,
  showMessage: false,
  actions: {
    createUser() {
      let self = this;
      let newUser = this.get('store').createRecord('user', {
        firstName: this.get('firstName'),
        lastName: this.get('lastName')
      });

      newUser.save().then(() => {
        self.set('showMessage', true)
      }).catch((err) => {
        Ember.Logger.info(err);
      });
    },
    deleteUser(userId) {
      Ember.Logger.info('controller:application/deleteUser/userId/', userId);
      return this.get('store').findRecord('user', userId).then((user) => {
        Ember.Logger.info(user);
        user.destroyRecord();
      });
    },
    editUser() {
      // this.store.findRecord('user', this.get('userId')).then((game) => {
      //   alert(game.get('title') + ' ' + game.get('id'))
      // })
    },
    createOrder() {

    },
    updateOrder() {

    }
  }
});
