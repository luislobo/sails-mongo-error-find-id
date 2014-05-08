module.exports = {
  connection: 'someMongodbServer',
  schema: true,
  attributes: {
    projectId: {
      model: 'document',
      required: true
    },
    properties: {
      type: 'json',
      required: true
    }
  }
};
