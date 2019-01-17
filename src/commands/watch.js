import program from 'commander'

program
  .command('watch')
  .alias('w')
  .description('Watch with BrowserSync')
  .action((name, id) => {
    console.log(name, id)
  })
