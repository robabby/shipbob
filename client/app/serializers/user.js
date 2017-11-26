import ApplicationSerializer from './application';
import DS from 'ember-data';

export default ApplicationSerializer.extend(DS.EmbeddedRecordsMixin, {
  attrs: {
    orders: { embedded: 'always' }
  },
  normalize(modelClass, resourceHash) {
    // Ember.Logger.info('normalize:user/resourceHash/', resourceHash);
    var data = {
      id: resourceHash.userId,
      type: modelClass.modelName,
      attributes: resourceHash
    };
    // Ember.Logger.info('normalize:user/data/', { data: data });
    return { data: data };
  }
});
