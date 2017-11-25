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
      return this.get('store').findRecord('user', userId, { reload: true }).then((user) => {
        user.destroyRecord();
      });
    },
    editUser() {

    }
  }
});
