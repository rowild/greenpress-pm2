const IS_PROD = process.env.NODE_ENV === 'production'

module.exports = {
  frontTheme: process.env.FRONT_THEME || 'classic', // manual change of theme
  scripts: {
    secrets: process.env.SECRETS_SERVICE_SCRIPT || './secrets/index.js',
    auth: process.env.AUTH_SERVICE_SCRIPT || './auth/index.js',
    content: process.env.CONTENT_SERVICE_SCRIPT || './content/index.js',
    assets: process.env.ASSETS_SERVICE_SCRIPT || './assets/index.js',
    front: process.env.FRONT_SERVICE_SCRIPT || (IS_PROD ? 'cd blog-front && npm start' : 'cd blog-front && npm run dev'),
    admin: process.env.ADMIN_SERVICE_SCRIPT || IS_PROD ? './admin/server.js' : 'cd admin && npm run serve',
  }
}
