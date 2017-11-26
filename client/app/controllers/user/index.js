import Controller from '@ember/controller';

export default Controller.extend({
  trackingId: '',
  locationName: 'ShipBob',
  street: '555 W Madison',
  city: 'Chicago',
  state: 'IL',
  zip: '60661',
  actions: {
    createOrder(userId) {
      let store = this.get('store');
      let orderLocation = store.createRecord('location', {
        name: this.get('locationName'),
        street: this.get('street'),
        city: this.get('city'),
        state: this.get('state'),
        zip: this.get('zip')
      });

      store.createRecord('order', {
        userId,
        trackingId: this.get('trackingId'),
        location: [orderLocation]
      }).save().then(() => {
        // store.reload();
      }).catch((err) => {
          Ember.Logger.info(err);
      });
    }
  }
});
