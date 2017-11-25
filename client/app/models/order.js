import DS from 'ember-data';

export default DS.Model.extend({
  user: DS.belongsTo('user'),
  orderId: DS.attr(),
  trackingId: DS.attr(),
  userId: DS.attr(),
  location: DS.belongsTo('location')
});
