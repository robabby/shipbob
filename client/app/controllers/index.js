import Controller from '@ember/controller';

export default Controller.extend({
  firstName: null,
  lastName: null,
  showMessage: false,
  actions: {
    createUser() {
      let self = this;

      this.get('store').createRecord('user', {
        firstName: this.get('firstName'),
        lastName: this.get('lastName')
      }).save().then(() => {
        self.set('showMessage', true);
        self.set('firstName', '');
        self.set('lastName', '');
      }).catch((err) => {
        Ember.Logger.info(err);
      });
    }
  }
});
