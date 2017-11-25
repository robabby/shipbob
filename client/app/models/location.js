import DS from 'ember-data';
import Fragment from 'ember-data-model-fragments/fragment';

export default Fragment.extend({
  street: DS.attr(),
  name: DS.attr(),
  city: DS.attr(),
  state: DS.attr(),
  zipcode: DS.attr()
});
