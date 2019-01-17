import program from 'commander'

program
  .command('hot')
  .alias('h')
  .description('Watch with Hot Module Replacement')

  .action((name, id) => {
    console.log(name, id)
  })
