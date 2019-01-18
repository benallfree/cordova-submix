import program from 'commander'

program
  .command('prod')
  .alias('p')
  .description('Create production build')
  .action(async (name, id) => {
    await ex(
      'cross-env NODE_ENV=production node_modules/webpack/bin/webpack.js --progress --hide-modules --config=node_modules/laravel-mix/setup/webpack.config.js',
      {
        text: 'Building production version',
      },
    )
  })
