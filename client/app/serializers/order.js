import ApplicationSerializer from './application';

export default ApplicationSerializer.extend({
  normalize(modelClass, resourceHash) {
    let data = {
      id: resourceHash.orderId,
      type: modelClass.modelName,
      attributes: resourceHash
    };
    return { data };
  }
});
