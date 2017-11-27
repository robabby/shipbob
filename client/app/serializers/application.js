import DS from 'ember-data';

export default DS.JSONSerializer.extend({
  normalize(modelClass, resourceHash) {
    var data = {
      id: resourceHash.userId,
      type: modelClass.modelName,
      attributes: resourceHash
    };
    return { data };
  }
});
