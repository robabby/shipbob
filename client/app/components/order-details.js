import Component from '@ember/component';
import { inject as service } from "@ember/service";

export default Component.extend({
  store: service(),
  router: service(),
  classNames: ['ob-order-details'],
  userId: null,
  firstName: null,
  lastName: null,
  orderId: null, // order.orderId
  trackingId: null,
  locationName: null,
  city: null,
  state: null,
  street: null,
  zipCode: null,
  isDisabled: true,
  didInsertElement() {
    this._super(...arguments);
    this.set('userId', this.get('user.userId'));
    this.set('firstName', this.get('user.firstName'));
    this.set('lastName', this.get('user.lastName'));
    this.set('orderId', this.get('order.orderId'));
    this.set('trackingId', this.get('order.trackingId'));
    this.set('locationName', this.get('location.name'));
    this.set('city', this.get('location.city'));
    this.set('state', this.get('location.state'));
    this.set('street', this.get('location.street'));
    this.set('zipCode', this.get('location.zipCode'));
  },
  actions: {
    toggleEdit() {
      this.toggleProperty('isDisabled');
    },
    cancelEdit() {
      this.toggleProperty('isDisabled');
      this.set('firstName', this.get('user.firstName'));
      this.set('lastName', this.get('user.lastName'));
      this.set('orderId', this.get('order.orderId'));
      this.set('trackingId', this.get('order.trackingId'));
      this.set('locationName', this.get('location.name'));
      this.set('city', this.get('location.city'));
      this.set('state', this.get('location.state'));
      this.set('street', this.get('location.street'));
      this.set('zipCode', this.get('location.zipCode'));
    },
    updateOrder(orderId) {
      this.get('store').findRecord('order', orderId, {
        include: this.get('userId'),
        reload: true
      }).then((order) => {
        order.set('location.name', this.get('locationName'));
        order.set('location.city', this.get('city'));
        order.set('location.state', this.get('state'));
        order.set('location.street', this.get('street'));
        order.set('location.zipCode', this.get('zipCode'));
        order.save();
        this.toggleProperty('isDisabled');
      });
    },
    deleteOrder(orderId) {
      this.get('store').findRecord('order', orderId, { reload: true }).then((order) => {
        order.destroyRecord().then(() => {
          this.get('router').transitionTo('user', this.get('userId'));
        });
      });
    }
  }
});
