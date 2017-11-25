import DS from 'ember-data';
import Fragment from 'ember-data-model-fragments/fragment';

export default Fragment.extend({
  userId: DS.attr(),
  orderId: DS.attr(),
  trackingId: DS.attr(),
  location: DS.attr()
});
