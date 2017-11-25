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
    editUser() {
      // this.store.findRecord('user', this.get('userId')).then((game) => {
      //   alert(game.get('title') + ' ' + game.get('id'))
      // })
    },
    getUsers() {

    },
    createOrder() {

    },
    updateOrder() {

    }
  }
});
