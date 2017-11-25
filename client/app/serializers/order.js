import ApplicationSerializer from './application';
import Ember from 'ember';

export default ApplicationSerializer.extend({
  normalize(modelClass, resourceHash) {
    Ember.Logger.info('serializer:order/modelClass/', modelClass);
    Ember.Logger.info('serializer:order/resourceHash/', resourceHash);
    var data = {
      id:            resourceHash.userId,
      type:          modelClass.modelName,
      attributes:    resourceHash
    };
    Ember.Logger.info('serializer:order/data/', { data });
    return { data: data };
  }
});
