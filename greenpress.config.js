module.exports = {
  services: {
    front: {
      theme: process.env.FRONT_THEME || 'classic', // manual change of theme
      cwd: process.env.FRONT_SERVICE_CWD || './blog-front'
    },
    secrets: {
      cwd: process.env.SECRETS_SERVICE_CWD || './secrets'
    },
    auth: {
      cwd: process.env.AUTH_SERVICE_CWD || './auth'
    },
    content: {
      cwd: process.env.CONTENT_SERVICE_CWD || './content'
    },
    assets: {
      cwd: process.env.ASSETS_SERVICE_CWD || './assets'
    },
    admin: {
      cwd: process.env.ADMIN_SERVICE_CWD || './admin'
    }
  }
}
