import DS from 'ember-data';
import { fragmentArray } from 'ember-data-model-fragments/attributes';

export default DS.Model.extend({
  userId: DS.attr({ defaultValue: 123 }),
  firstName:  DS.attr(),
  lastName:  DS.attr(),
  orders:  fragmentArray('order')
});
