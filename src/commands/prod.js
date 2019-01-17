import program from 'commander'

program
  .command('prod')
  .alias('p')
  .description('Create production build')

  .action((name, id) => {
    console.log(name, id)
  })
