import DS from 'ember-data';

export default DS.Model.extend({
  userId: DS.attr(),
  firstName:  DS.attr(),
  lastName:  DS.attr(),
  orders:  DS.hasMany('order', { async: true })
});
