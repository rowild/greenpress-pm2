const apps = require('./helpers/apps');

module.exports = {
	apps: [
		apps.db,
		apps.auth,
		apps.content,
		apps.admin,
		{
			...apps.front,
			script: 'cd blog-front && npm run dev'
		}
	]
};
