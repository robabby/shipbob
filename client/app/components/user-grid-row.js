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
    }
  }
});
