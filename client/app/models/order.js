import DS from 'ember-data';

export default DS.Model.extend({
  trackingId: DS.attr(),
  userId: DS.attr(),
  location: DS.belongsTo('location')
});
