import program from 'commander'

program
  .command('watch')
  .alias('w')
  .description('Watch with BrowserSync')
  .action(async (name, id) => {
    await ex(
      'NODE_ENV=development node_modules/webpack/bin/webpack.js --watch --progress --hide-modules --config=node_modules/laravel-mix/setup/webpack.config.js',
      {
        text: 'Watching for changes',
      },
    )
  })
