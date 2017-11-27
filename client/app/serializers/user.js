import ApplicationSerializer from './application';

export default ApplicationSerializer.extend({
  normalize(modelClass, resourceHash) {
    var data = {
      id: resourceHash.userId,
      type: modelClass.modelName,
      attributes: resourceHash
    };
    return { data };
  }
});
