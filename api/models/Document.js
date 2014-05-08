module.exports = {
  connection: 'someMongodbServer',
  schema: true,
  attributes: {
    projectId: {
      type: 'string',
      required: true
    },
    properties: {
      type: 'json',
      required: true
    }
  }
};
