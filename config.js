// Class to define the urls for the rest interface
// Version v1
// author: marc.zimmermann@mmbash.de and mike.michel@mmbash.de

// Docker Registry
exports.REGISTRYHOST = 'http://10.0.2.15:5000';
exports.REGLISTREPOS = '/v1/repos';
exports.REGREPOSTAGS = ' /v1/repositories/:name/tags/';
exports.REGDELETEAPP = '/v1/apps/:id';
exports.REGCHANGEAPP = '/v1/apps/:id';
exports.REGGETINFOSAPP = '/v1/apps/:id';

exports.ROUTEREGTAGS = '/v1/tags';

// Deployment url
exports.LISTAPPS = '/v1/apps';
exports.DEPLOYAPP = '/v1/apps';
exports.DELETEAPP = '/v1/apps/:id';
exports.CHANGEAPP = '/v1/apps/:id';
exports.GETINFOSAPP = '/v1/apps/:id';

// marathon stuff
exports.MARATHONHOST = 'http://mesosmaster02:8080';
exports.MARATHONLISTAPPS = '/v2/apps';
exports.MARATHONDEPLOYAPP = '/v2/apps';
exports.MARATHONDELETEAPP = '/v2/apps/';
exports.MARATHONCHANGEAPP = '/v2/apps/';
exports.MARATHONGETINFOSAPP = '/v2/apps/';
