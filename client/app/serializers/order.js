import ApplicationSerializer from './application';
import DS from 'ember-data';

export default ApplicationSerializer.extend(DS.EmbeddedRecordsMixin, {
  attrs: {
    location: { embedded: 'always' }
  },
  normalize(modelClass, resourceHash) {
    Ember.Logger.info('normalize:order/modelClass/', modelClass);
    Ember.Logger.info('normalize:order/resourceHash/', resourceHash);
    var data = {
      id: resourceHash.orderId,
      type: modelClass.modelName,
      attributes: resourceHash
    };
    Ember.Logger.info('normalize:order/data/', { data });
    return { data: data };
  }
});
