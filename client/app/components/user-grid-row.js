import Component from '@ember/component';
import { inject as service } from "@ember/service";

export default Component.extend({
  store: service(),
  className: ['user-grid__row'],
  firstName: null,
  lastName: null,
  isDisabled: true,
  didInsertElement() {
    this._super(...arguments);
    this.set('firstName', this.get('user.firstName'));
    this.set('lastName', this.get('user.lastName'));
  },
  actions: {
    toggleEdit() {
      this.toggleProperty('isDisabled');
    },
    deleteUser(userId) {
      return this.get('store').findRecord('user', userId, { reload: true }).then((user) => {
        user.destroyRecord();
      });
    },
    updateUser(userId) {
      this.get('store').findRecord('user', userId).then((user)  => {
        if (this.get('firstName') != this.get('user.firstName')) {
          user.set('firstName', this.get('firstName'));
        }
        if (this.get('lastName') != this.get('user.lastName')) {
          user.set('lastName', this.get('lastName'));
        }
        user.save();
      });
      this.toggleProperty('isDisabled');
    }
  }
});
