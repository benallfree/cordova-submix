import program from 'commander'
import { ex } from '../utils'

program
  .command('dev')
  .alias('d')
  .description('Create development build')
  .action(async (name, id) => {
    await ex(
      'NODE_ENV=development node_modules/webpack/bin/webpack.js --progress --hide-modules --config=node_modules/laravel-mix/setup/webpack.config.js',
      {
        text: 'Building development version',
      },
    )
  })
