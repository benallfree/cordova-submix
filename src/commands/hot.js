import program from 'commander'

program
  .command('hot')
  .alias('h')
  .description('Watch with Hot Module Replacement')
  .action(async (name, id) => {
    await ex(
      'cross-env NODE_ENV=development webpack-dev-server --inline --hot --config=node_modules/laravel-mix/setup/webpack.config.js',
      {
        text: 'Watching with HMR',
      },
    )
  })
