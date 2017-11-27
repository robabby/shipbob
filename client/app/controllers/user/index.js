import Controller from '@ember/controller';
const { $ } = Ember;

export default Controller.extend({
  showToast: false,
  toastDuration: 2000,
  trackingId: '',
  locationName: 'ShipBob',
  street: '555 W Madison',
  city: 'Chicago',
  state: 'IL',
  zipCode: '60661',
  createNewOrder: false,
  actions: {
    createOrder(userId) {
      let self = this;
      let store = this.get('store');

      let orderLocation = {
        city: this.get('city'),
        name: this.get('locationName'),
        street: this.get('street'),
        state: this.get('state'),
        zipCode: this.get('zipCode')
      };

      let order = store.createRecord('order', {
        userId,
        trackingId: this.get('trackingId'),
        location: orderLocation
      })

      order.save().then(() => {
        self.send('refresh');
        this.set('showToast', true)
        this.set('createNewOrder', false);
        this.set('trackingId', '');
      }).catch((err) => {
        Ember.Logger.info(err);
      });
    },
    deleteOrder(orderId) {
      let self = this;
      return this.get('store').findRecord('order', orderId, { reload: true }).then((order) => {
        order.destroyRecord().then(() => {
          self.send('refresh');
        });
      });
    },
    /* Dialog */
    openDialog(event) {
      this.set('dialogOrigin', $(event.currentTarget));
      this.set('createNewOrder', true);
    },
    closeDialog() {
      this.set('createNewOrder', false);
    },
    /* Toast */
    closeToast() {
      this.set('showToast', false);
    }
  }
});
