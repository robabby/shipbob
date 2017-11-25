import ApplicationSerializer from './application';
import Ember from 'ember';

export default ApplicationSerializer.extend({
  normalize(modelClass, resourceHash) {
    Ember.Logger.info('normalize:order/modelClass/', modelClass);
    Ember.Logger.info('normalize:order/resourceHash/', resourceHash);
    var data = {
      id:            resourceHash.orderId,
      type:          modelClass.modelName,
      attributes:    resourceHash
    };
    Ember.Logger.info('normalize:order/data/', { data });
    return { data: data };
  }
});
