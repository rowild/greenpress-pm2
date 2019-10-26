const { execSync } = require('child_process')
const apps, { DEV } = require('./apps')

execSync('cd auth && npm install')
execSync('cd secrets && npm install')
execSync('cd content && npm install')

execSync('cd assets && npm install')

execSync('cd admin && npm install && npm run build', {
  env: {
    ...process.env,
    ...apps.admin.env_production,
    NODE_ENV: 'development'
  }
})

execSync('cd blog-front && npm install')
