import program from 'commander'
import { ex } from '../utils'

program
  .command('hot')
  .alias('h')
  .description('Watch with Hot Module Replacement')
  .action(async (name, id) => {
    await ex(
      'node_modules/webpack-dev-server/bin/webpack-dev-server.js --inline --hot --config=node_modules/laravel-mix/setup/webpack.config.js',
      {
        env: {
          NODE_ENV: 'development',
        },
      },
    )
  })
