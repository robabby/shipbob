import DS from 'ember-data';
import Ember from 'ember';

export default DS.JSONSerializer.extend({
  normalize(modelClass, resourceHash) {
    Ember.Logger.info('/application/modelClass/', modelClass);
    Ember.Logger.info('/application/resourceHash/', resourceHash);
    var data = {
      id: resourceHash.userId,
      type: modelClass.modelName,
      attributes: resourceHash
    };
    Ember.Logger.info('/application/data/', { data });
    return { data: data };
  }
});
