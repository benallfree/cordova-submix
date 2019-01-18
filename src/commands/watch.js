import program from 'commander'
import { ex } from '../utils'

program
  .command('watch')
  .alias('w')
  .description('Watch with BrowserSync')
  .action(async (name, id) => {
    await ex(
      'node_modules/webpack/bin/webpack.js --watch --progress --hide-modules --config=node_modules/laravel-mix/setup/webpack.config.js',
      {
        env: {
          NODE_ENV: 'development',
        },
      },
    )
  })
