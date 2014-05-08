var DocumentController = {

  notworking: function(req, res) {
	Document.create({projectId:'536bd980cc9d9f45d8df5982', properties: {'name':'First','location':'z'}}).exec(console.log);
	Document.find({projectId: '536bd980cc9d9f45d8df5982'}).exec(console.log);
  },
  working: function(req, res) {
	Document2.create({projectId:'536bd980cc9d9f45d8df5982', properties: {'name':'First','location':'z'}}).exec(console.log);
	Document2.find({projectId: '536bd980cc9d9f45d8df5982'}).exec(console.log);
  }
};

module.exports = DocumentController;



