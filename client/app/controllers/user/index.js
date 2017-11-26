import Controller from '@ember/controller';

export default Controller.extend({
  trackingId: '',
  locationName: 'ShipBob',
  street: '555 W Madison',
  city: 'Chicago',
  state: 'IL',
  zipCode: '60661',
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
    }
  }
});
